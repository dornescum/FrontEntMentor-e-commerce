import React, {useState, useContext} from 'react';
import {ValueContext} from "../../context/ValueContext";
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import user from '../../images/image-avatar.png';

const navbarCategories =['collections', 'men', 'women', 'about', 'contact'];

const TheNavbar = () => {
	const {initialValue, setInitialValue} = useContext(ValueContext);
	console.log(initialValue);
	return (
		<nav className='navbar'>
			<div className='navbar-left'>
				<div className="logo">
					<img src={logo} alt="some logo"/>
				</div>
				<ul className='navbar-links'>
					{navbarCategories.map((el, index)=>{
						return <li key={index} className='links-li'>{el}</li>
					})}
				</ul>
				<button className='btn btn-sidebar'>X</button>
			</div>
			<div className='navbar-right'>
				<div className="cart-navbar" data-testid='cart-image'>
					<img src={cart} alt="cart image"/>
				</div>
				<div className="user-picture" data-testid='user-picture'>
					<img src={user} alt="user picture" />
				</div>
			</div>
		</nav>
	);
};

export default TheNavbar;
