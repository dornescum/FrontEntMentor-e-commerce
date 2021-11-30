import React, {useState, useContext} from 'react';
import {ValueContext} from "../../context/ValueContext";
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import user from '../../images/image-avatar.png';
import shoes from '../../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../../images/icon-delete.svg'
import {MdClose, MdDehaze} from "react-icons/md";
import Backdrop from "./BackDrop";

const navbarCategories = ['collections', 'men', 'women', 'about', 'contact'];

const TheNavbar = () => {
	const {initialValue, setInitialValue, showSidebar, setShowSidebar, productValue} = useContext(ValueContext);
	const [showCard, setShowCard] = useState(false);
	const handleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	const handleCard = () => {
		setShowCard(!showCard);
	};
	const removeProducts =()=>{
		setInitialValue(initialValue -1)
	}
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<button className="btn btn-sidebar" onClick={handleSidebar}>
					<MdDehaze/>
				</button>
				{showSidebar && <aside className={showSidebar ? 'active-sidebar' : 'aside'}>
					<div>
						<button onClick={handleSidebar} id="close-sidebar">
							<MdClose/>
						</button>
					</div>
					<ul>
						{navbarCategories.map((el, index) => {
							return <li key={index}>{el}</li>;
						})}
					</ul>
				</aside>}
				{showSidebar && <Backdrop onClick={handleSidebar}/>}
				<div className="logo">
					<img src={logo} alt="some logo"/>
				</div>
				<ul className="navbar-links">
					{navbarCategories.map((el, index) => {
						return <li key={index} className="links-li">{el}</li>;
					})}
				</ul>

			</div>
			<div className="navbar-right">
				<div className="cart-navbar" data-testid="cart-image">

					<img src={cart} alt="cart image"  onClick={handleCard}/>
					{showCard && <div className="show-card">
						<div className="cart-header">Cart</div>
						<div className="cart-containing">
							{initialValue === 0 ? <div className='empty-cart'>
								<h5>Your cart is empty</h5>
								</div> :
								<div className="cart-container">
									<div className="cart-info">
										<div className="cart-img">
											<img src={shoes} alt="shoes"/>
										</div>
										<div className="cart-products">
											<div className="cart-title">
												<p>Fall Limited Edition Sheakers</p>
											</div>
											<div className='cart-product'>
												${productValue} x {initialValue} <span>${initialValue * productValue}.00</span>
											</div>
										</div>
										<div className="delete-btn" onClick={removeProducts}>
											<img src={deleteIcon} alt="delete"/>
										</div>
									</div>
										<button className='checkout-btn'>Checkout</button>
								</div>}
						</div>
					</div>}
					<div className="cart-value">
						{initialValue}
					</div>
				</div>
				<div className="user-picture" data-testid="user-picture">
					<img src={user} alt="user picture"/>
				</div>
			</div>
		</nav>
	);
};

export default TheNavbar;
