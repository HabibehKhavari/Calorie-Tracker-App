import './FilterDishes.css';
import { useState } from 'react';

const FilterDishes = (props) => {
  const [startTimestamp, setStartTimestamp] = useState('');

  const startTimestampChangeHandler = (event) => {
    let newStartValue = event.target.value;
    console.log(newStartValue);
    props.onSetTimestamp(newStartValue);
    setStartTimestamp(newStartValue);
  };

  return (
    <div className="filter-metrics">
      <div className="filter-metrics__elements">
        <div className="filter-metrics__element">
          <p>Filter the Dishes</p>
        </div>
        <div className="filter-metrics__element">
          <label>Start on</label>
          <input
            type="date"
            value={startTimestamp}
            onChange={startTimestampChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default FilterDishes;
