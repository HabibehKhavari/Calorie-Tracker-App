import './DishTimestamp.css';

const DishTimestamp = (props) => {
  const dispTimestamp = props.userTimestamp.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return <div className="metric-item__date">{dispTimestamp}</div>;
};

export default DishTimestamp;
