import React, {Fragment} from 'react'
import classes from './Modal.module.css'

import ReactDOM from 'react-dom'

const Backdrop = (props) => {

    return (
        <div className={classes.backdrop}  onClick={props.onCloseCart}/>
    )

}

const ModalOverlay = (props) => {

    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )

}





const Modal = (props) => {

    const portalElement = document.getElementById('overlays');

    return (
        <Fragment>
           {/* <Backdrop />
            <ModalOverlay>{props.children}</ModalOverlay>
            if portals weren't being used
           */}

           {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}

           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

        </Fragment>

    );
};

export default Modal;