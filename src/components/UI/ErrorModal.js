import './ErrorModal.css'
import Card from './Card'
import { Fragment } from "react"


const ErrorModal = (props) => {

    return (
        <Fragment>
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
        </Fragment>
    )
}

export default ErrorModal