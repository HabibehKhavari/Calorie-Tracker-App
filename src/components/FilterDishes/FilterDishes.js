import './FilterDishes.css';

const FilterDishes = (props) => {

    const startTimestampChangeHandler = (event) => {
        let newStartValue = event.target.value;
        console.log(newStartValue);
        props.onSetTimestamp(newStartValue);
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
                        value={props.startTimestamp}
                        onChange={startTimestampChangeHandler}
                    />
                </div>
            </div>
        </div>
    );
};
export default FilterDishes;
