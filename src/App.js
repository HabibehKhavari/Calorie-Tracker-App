import logo from './logo.svg';
import './App.css';
import Dishes from './components/DishItem/Dishes';
import AddDish from './components/EditDishItem/AddDish';
import FilterDishes from './components/FilterDishes/FilterDishes';
import { useState } from 'react';
import Login from "./components/Login/Login"
import Modal from './components/UI/Modal';

const startupDishes = [
  {
    id: 0,
    timestamp: new Date(2021, 5, 2, 13, 22, 0, 0),
    name: 'Habibeh',
    mealtype: 'Lunch',
    calories: '45',
    description: '100gr burger',
  },
  {
    id: 1,
    timestamp: new Date(2021, 5, 5, 10, 22, 0, 0),
    name: 'Melika',
    mealtype: 'Breakfast',
    calories: '45',
    description: '100gr butter',
  },
  {
    id: 2,
    timestamp: new Date(2021, 5, 2, 13, 22, 0, 0),
    name: 'Mohammad',
    mealtype: 'Lunch',
    calories: '45',
    description: '100gr burger',
  },
  {
    id: 3,
    timestamp: new Date(2021, 5, 5, 10, 22, 0, 0),
    name: 'Emran',
    mealtype: 'Breakfast',
    calories: '45',
    description: '100gr butter',
  },
];

function App() {

  const [dishes, setDishes] = useState(startupDishes)
  const [startTimestamp, setStartTimestamp] = useState("2021-06-02")

  const addedDishHandler = (dish) => {
    console.log("someone gave me a new dish to add:", dish)
    setDishes((prevDishes) => { return [...prevDishes, dish] })
    console.log('my dishes are:', dishes);
  };

  const newTimestampSetHandler = (startTimestamp) => {
    console.log('start timestamp set to', startTimestamp);
    setStartTimestamp(startTimestamp)
  };

  return (
    <div>
      {false && <Modal><Login /></Modal>}
      <AddDish onAddDish={addedDishHandler} />
      <FilterDishes startTimestamp={startTimestamp} onSetTimestamp={newTimestampSetHandler} />
      <Dishes filterTimestamp={startTimestamp} data={dishes} />
    </div>
  );
}

export default App;
