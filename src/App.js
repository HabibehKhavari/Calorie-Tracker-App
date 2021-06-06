import logo from './logo.svg';
import './App.css';
import Metrics from './components/MetricItem/Metrics';

function App() {
  const metrics = [
    {
      date: new Date(2021, 5, 2, 13, 22, 0, 0),
      name: 'Habibeh',
      meal: 'Lunch',
      calorei: '45 cal',
      amount: '100gr burger',
    },
    {
      date: new Date(2021, 5, 5, 10, 22, 0, 0),
      name: 'Melika',
      meal: 'Breakfast',
      calorei: '45 cal',
      amount: '100gr butter',
    },
  ];

  return (
    <div>
      <h1>Hello</h1>
      <Metrics data={metrics} />
    </div>
  );
}

export default App;
