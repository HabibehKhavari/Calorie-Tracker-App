import './AddDish.css';
import DishForm from './DishForm';

const AddMetric = (props) => {
  const addedDishHandler = (dish) => {
    console.log('someone gave me a new dish to add', dish);
  };

  return (
    <div className="add-metric">
      <DishForm onAddDish={addedDishHandler} />
    </div>
  );
};
export default AddMetric;
