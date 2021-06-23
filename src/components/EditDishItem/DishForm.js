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

  const [userMealtype, setUserMealtype] = useState([]);
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
          labelText="Timestamp"
          input={{
            id: "timestamp",
            type: "datetime-local",
            value: userTimestamp,
            onChange: timestampChangeHandler
          }} />

        <Input className="add-metric__element"
          labelText="Name"
          input={{
            id: "name",
            type: "text",
            value: userName,
            onChange: nameChangeHandler
          }}
        />
        <Input className="add-metric__element"
          labelText="Meal type"
          input={{
            id: "mealtype",
            type: "text",
            list: "mealTypes",
            value: userMealtype,
            onChange: mealtypeChangeHandler
          }}><datalist id="mealTypes" name="mealTypes">
            <option value="Breakfast" />
            <option value="Lunch" />
            <option value="Evening meal" />
            <option value="Dinner" />
          </datalist>
        </Input>
        <Input className="add-metric__element"
          labelText="Description"
          input={{
            id: "description",
            type: "text",
            value: userDescription,
            onChange: descriptionChangeHandler
          }}
        />
        <Input className="add-metric__element"
          labelText="Calories"
          input={{
            id: "calories",
            min: "0",
            step: "1",
            type: "number",
            value: userCalories,
            onChange: caloriesChangeHandler
          }}
        />

      </div>
      <div className="add-metric__actions">
        <button type="submit">Add metric</button>
      </div>
    </form>
  );
};
export default DishForm;
