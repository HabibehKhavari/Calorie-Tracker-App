import './DishItem.css';
import DishDate from './DishDate';
import Card from '../UI/Card';

const DishItem = (props) => {
  return (
    <Card className="metric-item">
      <div className="metric-item__metric">
        <DishDate userTimestamp={props.userTimestamp} />
        <div>{props.userDescription}</div>
        <h3>{props.userMealtype}</h3>
        <h1>{props.userName}</h1>
      </div>
      <div className="metric-item__count">{props.userCalories}</div>
    </Card>
  );
};
export default DishItem;
