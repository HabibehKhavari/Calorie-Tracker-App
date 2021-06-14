import './AddDish.css';
import DishForm from './DishForm';
import ErrorModal from '../UI/ErrorModal'
import { useState } from 'react';

const AddMetric = (props) => {
  const [error, setError] = useState()
  const addedDishHandler = (dish) => {
    console.log('someone gave me a new dish to add', dish);
    if (dish.name.trim().length === 0) {
      setError("Name is mandatory")
      return false;
    }
    if (dish.mealtype.trim().length === 0) {
      setError("Meal type is mandatory")
      return false;
    }
    if (dish.calories.trim().length === 0) {
      setError("Calories is mandatory")
      return false;
    }
    if (dish.description.trim().length === 0) {
      setError("Description is mandatory")
      return false;
    }

    props.onAddDish(dish);
    return true;
  }

  const onDismissModalHandler = () => {
    console.log("Reseting error")
    setError(null)
  }

  return (
    <div className="add-metric">
      {error && <ErrorModal
        title="An erroe occurred"
        message={error} onDismiss={onDismissModalHandler} />}
      <DishForm onAddDish={addedDishHandler} />
    </div>
  );
};
export default AddMetric;
