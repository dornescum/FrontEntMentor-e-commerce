import React, {useState, useContext} from 'react';
import {ValueContext} from "../context/ValueContext";
import img1 from '../images/image-product-1.jpg';
import img2 from '../images/image-product-2.jpg';
import img3 from '../images/image-product-3.jpg';
import img4 from '../images/image-product-4.jpg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';
import {MdAdd, MdRemove } from "react-icons/md";
import cart from '../images/icon-cart.svg'


const Home = () => {
	const {initialValue, setInitialValue} = useContext(ValueContext);
	const [showImg1, setShowImg1] = useState(true);
	const [showImg2, setShowImg2] = useState(false);
	const [showImg3, setShowImg3] = useState(false);
	const [showImg4, setShowImg4] = useState(false);

	const showImage2=()=>{

	}

const addProduct=()=>{
	setInitialValue(initialValue + 1);
}
const removeProduct=()=>{
	setInitialValue(initialValue - 1);
}
	const handleCart = () => {
		setInitialValue(initialValue + 1);
	};
	return (
		<div className="row" id='home'>
			<div className="col-lg-5">
				<div className="wrapper" data-testid="left-wrapper">
					<div className="main-img">
						{showImg1 && <div className="first-img">
							<img src={img1} alt="snickers" className="active-img"/>
						</div>}
						{showImg2 && <div className="first-img">
							<img src={img2} alt="snickers" className="active-img"/>
						</div>}
						{showImg3 && <div className="first-img">
							<img src={img3} alt="snickers" className="active-img"/>
						</div>}
						{showImg4 && <div className="first-img">
							<img src={img4} alt="snickers" className="active-img"/>
						</div>}


					</div>
					<div className="multiple-img">
						<div className="thumb first-thumb">
							<img src={thumb1} alt="snickers thumbnail" className="active-thumb"/>
						</div>
						<div className="thumb second-thumb">
							<img src={thumb2} alt="snickers thumbnail" className="active-thumb"/>
						</div>
						 <div className="thumb third-thumb">
							<img src={thumb3} alt="snickers thumbnail" className="active-thumb"/>
						</div>
						 <div className="thumb fourth-thumb">
							<img src={thumb4} alt="snickers thumbnail" className="active-thumb"/>
						</div>


					</div>
				</div>

			</div>
			<div className="col-lg-7">
				<div className="wrapper">
					<article>
						<h5>Sneaker Company</h5>
						<div className="article-title">
							<p>
								Fall Limited edition sneakers
							</p>
						</div>
						<div className="article-description">
							<p>
								These low-profile sneakers are your perfect casual wear
								companion. Featuring a durable rubber outer sole, they'll
								withstand everything the weather can offer.
							</p>
						</div>
						<div className="article-price">
							<div className="latest-price">
								<p>$125</p>
							</div>
							<div className="deduction">
								<p>50%</p>
							</div>
						</div>
						<div className="article-old-price">
							 <p>$250</p>
						</div>
						<div className="article-footer">
							<div className="item-value">
								{/*<img src="" alt=""/>*/}

									<MdRemove  id='reduce' onClick={removeProduct}/>


								<div className='article-value'>
									{initialValue}
								</div>

								<MdAdd  id='add' onClick={addProduct}/>
								{/*<img src="" alt=""/>*/}
							</div>
								<button onClick={handleCart} className='btn-cart'>
									{/*fixme add color white to cart icon*/}
									<img src={cart} alt="cart" id='cart-btn' style={{color:'$white'}}/>
Add to cart
								</button>

						</div>
					</article>
				</div>




			</div>
		</div>
	);
};

export default Home;
