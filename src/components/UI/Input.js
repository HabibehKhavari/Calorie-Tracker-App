import "./Input.css";

const Input = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.id}>{props.labelText}</label>
            <input
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}

export default Input;