import logo from './logo.svg';
import './App.css';
import MetricItem from './components/MetricItem'

function App() {
  let userDate=new Date(2021,5,2,13,22,0,0);
  let userName="Habibeh";
  let userMeal="Lunch";
  let userCalorei="45 cal";
  let userAmount="100gr burger";

  return (
    <div>
    <h1>Hello</h1>
    <MetricItem
    userDate={userDate}
    userName={userName}
    userMeal={userMeal}
    userCalorei={userCalorei}
    userAmount={userAmount}
    />
    </div>
  );
}

export default App;
