import './FilterDishes.css';

const FilterDishes = (props) => {

    const startTimestampChangeHandler = (event) => {
        let newStartValue = event.target.value;
        console.log(newStartValue);
        props.onSetTimestamp(newStartValue);
    };

    const searchChangeHandler = (event) => {
        let newSearchValue = event.target.value;
        console.log(newSearchValue);
        props.onSetSearch(newSearchValue);
    };

    return (
        <div className="filter-metrics">
            <div className="filter-metrics__elements">
                <div className="filter-metrics__element">
                    <p>Filter the Dishes</p>
                </div>
                <div className="filter-metrics__element">
                    <label>Search: </label>
                    <input
                        type="text"
                        value={props.searchInList}
                        onChange={searchChangeHandler}
                    />
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
