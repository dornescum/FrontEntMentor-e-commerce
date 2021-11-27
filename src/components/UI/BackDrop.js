
import React from 'react';
import ReactDOM from 'react-dom';

import './BackDrop.css';

const Backdrop = props => {
	return ReactDOM.createPortal(
		<div className="backdrop" onClick={props.onClick} data-testid='backdrop-container'></div>,
		document.getElementById('backdrop-portal')
	);
};

export default Backdrop;
