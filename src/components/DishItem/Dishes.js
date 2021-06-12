import { directive } from '@babel/types';
import './Dishes.css';
import DishItem from './DishItem';
import Card from '../UI/Card';

const Dishes = (props) => {
  return (
    <Card className="metrics">
      <DishItem
        userTimestamp={props.data[0].timestamp}
        userName={props.data[0].name}
        userMealtype={props.data[0].mealtype}
        userCalories={props.data[0].calories}
        userDescription={props.data[0].description}
      />
      <DishItem
        userTimestamp={props.data[1].timestamp}
        userName={props.data[1].name}
        userMealtype={props.data[1].mealtype}
        userCalories={props.data[1].calories}
        userDescription={props.data[1].description}
      />
    </Card>
  );
};
export default Dishes;
