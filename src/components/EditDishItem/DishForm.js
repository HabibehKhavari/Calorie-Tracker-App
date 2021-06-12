import './MetricForm.css';
import { useState } from 'react';

const MetricForm = (props) => {
  const [userData, setUserData] = useState('');
  const dateChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserData(newValue);
    console.log(`someone typed ${userData}`);
  };

  const [userName, setUserName] = useState('');
  const nameChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserName(newValue);
    console.log(`someone typed ${userName}`);
  };

  const [userMeal, setUserMeal] = useState('');
  const mealChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserMeal(newValue);
    console.log(`someone typed ${userMeal}`);
  };

  const [userAmount, setUserAmount] = useState('');
  const amountChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserAmount(newValue);
    console.log(`someone typed ${userAmount}`);
  };

  const [userCalorei, setUserCalorei] = useState('');
  const caloreiChangeHandler = (event) => {
    let newValue = event.target.value;
    setUserCalorei(newValue);
    console.log(`someone typed ${userCalorei}`);
  };

  return (
    <form>
      <div className="add-metric__elements">
        <div className="add-metric__element">
          <label>Date</label>
          <input type="datetime-local" onChange={dateChangeHandler} />
        </div>
        <div className="add-metric__element">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="add-metric__element">
          <label>Meal</label>
          <input type="text" onChange={mealChangeHandler} />
        </div>
        <div className="add-metric__element">
          <label>Amount</label>
          <input type="text" onChange={amountChangeHandler} />
        </div>
        <div className="add-metric__element">
          <label>Calorei</label>
          <input
            type="number"
            min="0"
            step="1"
            onChange={caloreiChangeHandler}
          />
        </div>
      </div>
      <div className="add-metric__actions">
        <button type="submit">Add metric</button>
      </div>
    </form>
  );
};
export default MetricForm;
