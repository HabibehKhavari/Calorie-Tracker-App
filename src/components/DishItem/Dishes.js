import { directive } from '@babel/types';
import './Dishes.css';
import DishItem from './DishItem';
import Card from '../UI/Card';

const Dishes = (props) => {
  return (
    <Card className="metrics">
      {props.data.map((item, index) => {
        return <DishItem
          userTimestamp={props.data[index].timestamp}
          userName={props.data[index].name}
          userMealtype={props.data[index].mealtype}
          userCalories={props.data[index].calories}
          userDescription={props.data[index].description}
        />
      })
      }
    </Card>
  );
};
export default Dishes;
