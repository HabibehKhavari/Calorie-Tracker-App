import "./DishesList.css"
import DishItem from "./DishItem"


const DishesList = (props) => {

    const onDeleteHandler = (id) => {
        props.onDelete(id)
    }
    if (props.data.length === 0) {
        return <p className="metrics-list__empty">No data to show in this date</p>
    }
    return props.data.map((item) => {
        return <DishItem key={item.id}
            id={item.id}
            userTimestamp={item.timestamp}
            userName={item.name}
            userMealtype={item.mealtype}
            userCalories={item.calories}
            userDescription={item.description}
            onDeleteHandler={onDeleteHandler}
        />
    })
}
export default DishesList