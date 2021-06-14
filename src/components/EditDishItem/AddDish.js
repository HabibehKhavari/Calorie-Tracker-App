import './AddDish.css';
import DishForm from './DishForm';

const AddMetric = (props) => {
  const addedDishHandler = (dish) => {
    console.log('someone gave me a new dish to add', dish);
    if (dish.name.trim().length === 0 ||
      dish.mealtype.trim().length === 0 ||
      dish.calories.trim().length === 0 ||
      dish.description.trim().length === 0) { return false; }

    props.onAddDish(dish);
    return true;
  }

  return (
    <div className="add-metric">
      <DishForm onAddDish={addedDishHandler} />
    </div>
  );
};
export default AddMetric;
