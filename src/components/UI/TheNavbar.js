import React, {useState, useContext} from 'react';
import {ValueContext} from "../../context/ValueContext";
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import user from '../../images/image-avatar.png';
import {MdClose, MdDehaze} from "react-icons/md";
import Backdrop from "./BackDrop";

const navbarCategories =['collections', 'men', 'women', 'about', 'contact'];

const TheNavbar = () => {
	const {initialValue, setInitialValue, showSidebar, setShowSidebar} = useContext(ValueContext);
	// console.log(initialValue);
	// console.log(showSidebar);
	const handleSidebar=()=>{
		setShowSidebar(!showSidebar)
	}
	return (
		<nav className='navbar'>
			<div className='navbar-left'>
				<button className='btn btn-sidebar' onClick={handleSidebar}>
					<MdDehaze />
				</button>
				{showSidebar && <aside className={showSidebar ? 'active-sidebar': 'aside'}>
					<div>
						<button onClick={handleSidebar} id='close-sidebar'>
							<MdClose />
						</button>
					</div>
					<ul>
						{navbarCategories.map((el, index)=>{
							return <li key={index} >{el}</li>
						})}
					</ul>
				</aside>}
				{showSidebar && <Backdrop onClick={handleSidebar}/>}
				<div className="logo">
					<img src={logo} alt="some logo"/>
				</div>
				<ul className='navbar-links'>
					{navbarCategories.map((el, index)=>{
						return <li key={index} className='links-li'>{el}</li>
					})}
				</ul>

			</div>
			<div className='navbar-right'>
				<div className="cart-navbar" data-testid='cart-image'>
					<div>
						{initialValue}
					</div>
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
