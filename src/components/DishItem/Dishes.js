import { directive } from '@babel/types';
import './Dishes.css';
import DishesList from './DishesList';
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
      <DishesList data={filteredItems} />
    </Card>
  );
};
export default Dishes;
