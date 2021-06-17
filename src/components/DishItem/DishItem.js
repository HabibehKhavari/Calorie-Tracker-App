import './DishItem.css';
import DishTimestamp from './DishTimestamp';
import Card from '../UI/Card';

const DishItem = (props) => {

  const deleteHadler = () => {
    props.onDeleteHandler(props.id)
    console.log("dishitem  id", props.id)
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
      <button className="delete" onClick={deleteHadler} >Delete</button>
    </Card>
  );
};
export default DishItem;
