import { directive } from '@babel/types';
import './Dishes.css';
import DishItem from './DishItem';
import Card from '../UI/Card';

const Dishes = (props) => {
  console.log("filtering on", props.filterTimestamp)

  const timestamp = new Date(props.filterTimestamp)

  const filteredItems = props.data.filter((item) => {
    return (
      item.timestamp.getYear() === timestamp.getYear() &&
      item.timestamp.getMonth() === timestamp.getMonth() &&
      item.timestamp.getDate() === timestamp.getDate())
  })

  return (
    <Card className="metrics">
      {
        filteredItems.length === 0
          ?
          <p>No data to show in this date</p>
          :
          filteredItems.map((item) => {
            return <DishItem key={item.id}
              userTimestamp={item.timestamp}
              userName={item.name}
              userMealtype={item.mealtype}
              userCalories={item.calories}
              userDescription={item.description}
            />
          })
      }
    </Card>
  );
};
export default Dishes;
