import './MetricForm.css';

const MetricForm = (props) => {
  return (
    <form>
      <div className="add-metric__elements">
        <div className="add-metric__element">
          <label>Date</label>
          <input type="datetime-local" />
        </div>
        <div className="add-metric__element">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="add-metric__element">
          <label>Meal</label>
          <input type="text" />
        </div>
        <div className="add-metric__element">
          <label>Amount</label>
          <input type="text" />
        </div>
        <div className="add-metric__element">
          <label>Calorei</label>
          <input type="number" min="0" step="1" />
        </div>
      </div>
      <div className="add-metric__actions">
        <button type="submit">Add metric</button>
      </div>
    </form>
  );
};
export default MetricForm;
