import React from 'react';
import ReactDOM from "react-dom";


const Modal = (props) => {
	const modal = <div className='modal-car' onClick={props.onClick}>{props.children}</div>
	return ReactDOM.createPortal(modal, document.getElementById('modal-portal'));
};


export default Modal;
