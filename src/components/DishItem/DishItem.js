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
        <div contentEditable="true">{props.userDescription}</div>
        <h3 contentEditable="true">{props.userMealtype}</h3>
        <h1 contentEditable="true">{props.userName}</h1>
      </div>
      <div className="metric-item__count" contentEditable="true">{props.userCalories} cal</div>
      <button className="delete" onClick={deleteHadler} >Delete</button>
      <button className="update">Update</button>
    </Card>
  );
};
export default DishItem;
