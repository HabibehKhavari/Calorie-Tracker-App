import './DishItem.css';
import DishTimestamp from './DishTimestamp';
import Card from '../UI/Card';

const DishItem = (props) => {

  const deleteHadler = () => {
    props.onDeleteHandler(props.key)
    console.log("dishitem  id", props.key)
  }

  return (
    <Card className="metric-item">
      <div className="metric-item__metric">
        <DishTimestamp userTimestamp={props.userTimestamp} />
        <div>{props.userDescription}</div>
        <h3>{props.userMealtype}</h3>
        <h1>{props.userName}</h1>
      </div>
      <div className="metric-item__count">{props.userCalories} cal</div>
      <button onClick={deleteHadler} >Delete</button>
    </Card>
  );
};
export default DishItem;
