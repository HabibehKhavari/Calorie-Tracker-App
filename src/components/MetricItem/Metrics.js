import { directive } from '@babel/types';
import './Metrics.css';
import MetricItem from './MetricItem';
import Card from '../UI/Card';

const Metrics = (props) => {
  return (
    <Card className="metrics">
      <MetricItem
        userDate={props.data[0].date}
        userName={props.data[0].name}
        userMeal={props.data[0].meal}
        userCalorei={props.data[0].calorei}
        userAmount={props.data[0].amount}
      />
      <MetricItem
        userDate={props.data[1].date}
        userName={props.data[1].name}
        userMeal={props.data[1].meal}
        userCalorei={props.data[1].calorei}
        userAmount={props.data[1].amount}
      />
    </Card>
  );
};
export default Metrics;
