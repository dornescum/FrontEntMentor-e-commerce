
import React from 'react';
import ReactDOM from 'react-dom';


const Backdrop = props => {
	return ReactDOM.createPortal(
		<div className="backdrop" onClick={props.onClick} data-testid='backdrop-portal'></div>,
		document.getElementById('backdrop-portal')
	);
};

export default Backdrop;
