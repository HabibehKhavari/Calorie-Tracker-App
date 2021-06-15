import "./Modal.css";
import { Fragment } from "react";

const Modal = (props) => {
    return (
        <Fragment>
            <div className="backdrop" />
            <div className="modal-content">{props.children}</div>
        </Fragment>
    );
}

export default Modal;