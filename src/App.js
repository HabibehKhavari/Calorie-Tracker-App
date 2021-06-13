import logo from './logo.svg';
import './App.css';
import Dishes from './components/DishItem/Dishes';
import AddDish from './components/EditDishItem/AddDish';
import FilterDishes from './components/FilterDishes/FilterDishes';
import { useState } from 'react';

const startupDishes = [
  {
    timestamp: new Date(2021, 5, 2, 13, 22, 0, 0),
    name: 'Habibeh',
    mealtype: 'Lunch',
    calories: '45 cal',
    description: '100gr burger',
  },
  {
    timestamp: new Date(2021, 5, 5, 10, 22, 0, 0),
    name: 'Melika',
    mealtype: 'Breakfast',
    calories: '45 cal',
    description: '100gr butter',
  },
];

function App() {

  const [dishes, setDishes] = useState(startupDishes)

  const addedDishHandler = (dish) => {
    console.log("someone gave me a new dish to add:", dish)
    setDishes((prevDishes) => { return [...prevDishes, dish] })
    console.log('my dishes are:', dishes);
  };

  const newTimestampSetHandler = (startTimestamp) => {
    console.log('start timestamp set to', startTimestamp);
  };

  return (
    <div>
      <AddDish onAddDish={addedDishHandler} />
      <FilterDishes onSetTimestamp={newTimestampSetHandler} />
      <Dishes data={dishes} />
    </div>
  );
}

export default App;
