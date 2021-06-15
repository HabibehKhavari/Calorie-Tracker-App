import './DishForm.css';
import { useState } from 'react';
import Input from '../UI/Input';

const DishForm = (props) => {
  const [userTimestamp, setUserTimestamp] = useState('');
  const timestampChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserTimestamp(newValue);
    console.log(`someone typed ${userTimestamp}`);
  };

  const [userName, setUserName] = useState('');
  const nameChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserName(newValue);
    console.log(`someone typed ${userName}`);
  };

  const [userMealtype, setUserMealtype] = useState('');
  const mealtypeChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserMealtype(newValue);
    console.log(`someone typed ${userMealtype}`);
  };

  const [userDescription, setUserDescription] = useState('');
  const descriptionChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserDescription(newValue);
    console.log(`someone typed ${userDescription}`);
  };

  const [userCalories, setUserCalories] = useState('');
  const caloriesChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserCalories(newValue);
    console.log(`someone typed ${userCalories}`);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newDish = {
      id: Math.random(),
      timestamp: new Date(userTimestamp),
      name: userName,
      mealtype: userMealtype,
      calories: userCalories,
      description: userDescription,
    };

    console.log('My New Dish', newDish);
    if (props.onAddDish(newDish)) {
      console.log('Resarting form data');
      setUserName("");
      setUserTimestamp("");
      setUserMealtype("");
      setUserCalories("");
      setUserDescription("");
    }
    else {
      console.log("Error found during validation!")
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="add-metric__elements">
        <Input className="add-metric__element"
          id="timestamp"
          labelText="Timestamp"
          value={userTimestamp}
          type="datetime-local" onChange={timestampChangeHandler} />

        <div className="add-metric__element">
          <label>Name</label>
          <input type="text" value={userName} onChange={nameChangeHandler} />
        </div>
        <div className="add-metric__element">
          <label>Meal type</label>
          <input type="text" value={userMealtype} onChange={mealtypeChangeHandler} />
        </div>
        <div className="add-metric__element">
          <label>Description</label>
          <input type="text" value={userDescription} onChange={descriptionChangeHandler} />
        </div>
        <div className="add-metric__element">
          <label>Calories</label>
          <input
            type="number"
            min="0"
            step="1"
            onChange={caloriesChangeHandler}
            value={userCalories}
          />
        </div>
      </div>
      <div className="add-metric__actions">
        <button type="submit">Add metric</button>
      </div>
    </form>
  );
};
export default DishForm;
