import './ErrorModal.css'
import Card from './Card'


const ErrorModal = (props) => {

    return (
        <div>
            <div className="backdrop" />
            <Card className="modal">
                <header className="error__title">
                    <h2>{props.title}</h2>
                </header>
                <div className="error__content">
                    <p>{props.message}</p>
                </div>
                <footer className="error__actions">
                    <button onClick={props.onDismiss} type="button">OK</button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal