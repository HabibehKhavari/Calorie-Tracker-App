import "./MetricItem.css"

const MetricItem = (props)=>{
    return <div className="metric-item">
    <div className="metric-item__date">{props.userDate.toISOString()}</div>
    <div className="metric-item__metric">
        <div>{props.userAmount}</div>
        <h3>{props.userMeal}</h3>
        <h1>{props.userName}</h1>
    </div>
    <div className="metric-item__count">{props.userCalorei}</div>
</div>
}
export default MetricItem