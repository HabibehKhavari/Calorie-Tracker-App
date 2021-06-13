import { directive } from '@babel/types';
import './Dishes.css';
import DishItem from './DishItem';
import Card from '../UI/Card';

const Dishes = (props) => {
  return (
    <Card className="metrics">
      {props.data.map((item) => {
        return <DishItem
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
