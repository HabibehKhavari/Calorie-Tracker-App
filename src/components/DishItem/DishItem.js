import './MetricItem.css';
import MetricDate from './MetricDate';
import Card from '../UI/Card';

const MetricItem = (props) => {
  return (
    <Card className="metric-item">
      <div className="metric-item__metric">
        <MetricDate userDate={props.userDate} />
        <div>{props.userAmount}</div>
        <h3>{props.userMeal}</h3>
        <h1>{props.userName}</h1>
      </div>
      <div className="metric-item__count">{props.userCalorei}</div>
    </Card>
  );
};
export default MetricItem;
