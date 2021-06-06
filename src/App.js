import logo from './logo.svg';
import './App.css';
import MetricItem from './components/MetricItem'

function App() {
  const metrics = [
    {
      date:new Date(2021,5,2,13,22,0,0),
      name:"Habibeh",
      meal:"Lunch",
      calorei:"45 cal",
      amount:"100gr burger"
    },
    {
      date:new Date(2021,5,5,10,22,0,0),
      name:"Melika",
      meal:"Breakfast",
      calorei:"45 cal",
      amount:"100gr butter"
    }
  ]

  return (
    <div>
    <h1>Hello</h1>
    <MetricItem
    userDate={metrics[0].date}
    userName={metrics[0].name}
    userMeal={metrics[0].meal}
    userCalorei={metrics[0].calorei}
    userAmount={metrics[0].amount}
    />
    <MetricItem
    userDate={metrics[1].date}
    userName={metrics[1].name}
    userMeal={metrics[1].meal}
    userCalorei={metrics[1].calorei}
    userAmount={metrics[1].amount}
    />
    </div>
  );
}

export default App;
