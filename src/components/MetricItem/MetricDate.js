import './MetricDate.css';

const MetricDate = (props) => {
  const dispDate = props.userDate.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return <div className="metric-item__date">{dispDate}</div>;
};

export default MetricDate;
