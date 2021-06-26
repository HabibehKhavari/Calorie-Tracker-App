import { directive } from '@babel/types';
import './Dishes.css';
import DishesList from './DishesList';
import Card from '../UI/Card';

const Dishes = (props) => {
  console.log("filtering on", props.filterTimestamp, "searching on", props.searchInList)

  const timestamp = new Date(props.filterTimestamp)
  const searchingWord = props.searchInList

  const filteredItems = props.data.filter((item) => {
    return (
      item.timestamp.getYear() === timestamp.getYear() &&
      item.timestamp.getMonth() === timestamp.getMonth() &&
      item.timestamp.getDate() === timestamp.getDate() &&
      (item.mealtype.includes(searchingWord) ||
        item.name.includes(searchingWord) ||
        item.description.includes(searchingWord))
    )
  })

  const deletedItem = (id) => {
    props.onDelete(id)
  }

  return (
    <Card className="metrics">
      <DishesList data={filteredItems} onDelete={deletedItem} />
    </Card>
  );
};
export default Dishes;
