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
    timestamp: new Date(2021, 5, 2, 10, 22, 0, 0),
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
    timestamp: new Date(2021, 5, 2, 10, 22, 0, 0),
    name: 'Emran',
    mealtype: 'Breakfast',
    calories: '45',
    description: '100gr butter',
  },
  {
    id: 4,
    timestamp: new Date(2021, 5, 2, 10, 22, 0, 0),
    name: 'Emran',
    mealtype: 'Dinner',
    calories: '45',
    description: '200gr rice',
  },
];

function App() {

  const [dishes, setDishes] = useState(startupDishes)
  const [startTimestamp, setStartTimestamp] = useState("2021-06-02")
  const [searchInList, setSearchInList] = useState("")

  const addedDishHandler = (dish) => {
    console.log("someone gave me a new dish to add:", dish)
    setDishes((prevDishes) => { return [...prevDishes, dish] })
    console.log('my dishes are:', dishes);
  };

  const newTimestampSetHandler = (startTimestamp) => {
    console.log('start timestamp set to', startTimestamp);
    setStartTimestamp(startTimestamp)
  };

  const onSetSearchHandler = (searchInList) => {
    console.log('start searching ...', searchInList)
    setSearchInList(searchInList)
  }

  const deletedDish = (id) => {
    console.log("app... id", id)
    setDishes(dishes.filter((item) => {
      return (
        item.id !== id)
    }))
  }
  const onLoginListener = (credentials) => {
    console.log("I should authenticate ", credentials)
    const theAuthUser = dummyAuthenticator(credentials);
    console.log("I have an user ", theAuthUser)
    setAuthUser(theAuthUser)
  }

  const dummyAuthenticator = (credentials) => {
    if (credentials.username.toUpperCase().startsWith("U")) {
      return {
        id: Math.random(),
        username: credentials.username,
        name: "Theodoris SkRt",
        role: "user"
      }
    }
    if (credentials.username.toUpperCase().startsWith("M")) {
      return {
        id: Math.random(),
        username: credentials.username,
        name: "Habibeh K",
        role: "manager"
      }
    }
    return null;

  }

  const [authUser, setAuthUser] = useState(null);

  return (
    <div>
      {authUser == null && <Modal><Login onLogin={onLoginListener} /></Modal>}
      {authUser !== null && <>
        <AddDish onAddDish={addedDishHandler} />
        <FilterDishes startTimestamp={startTimestamp} onSetTimestamp={newTimestampSetHandler} searchInList={searchInList} onSetSearch={onSetSearchHandler} />
        <Dishes filterTimestamp={startTimestamp} data={dishes} onDelete={deletedDish} searchInList={searchInList} />
      </>
      }
    </div>
  );
}

export default App;
