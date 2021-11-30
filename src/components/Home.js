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
import {MdAdd, MdRemove, MdShoppingCart} from "react-icons/md";
// import Modal from "./Modal/Modal";
// import cart from '../images/icon-cart.svg';
import ModalContent from "./Modal/ModalContent";


const Home = () => {
	const {initialValue, setInitialValue, showModal, setShowModal} = useContext(ValueContext);
	const [items, setItems]=useState(0)
	const [showImg1, setShowImg1] = useState(true);
	const [showImg2, setShowImg2] = useState(false);
	const [showImg3, setShowImg3] = useState(false);
	const [showImg4, setShowImg4] = useState(false);
	const[overlay, setOverlay]=useState(false);
	// const [showModal, setShowModal] = useState(false);

	const handlerModal = (arg) => {
		setShowModal(!showModal);
		setOverlay(!overlay)
	};


	const handleImage1 = () => {
		setShowImg1(true);
		setShowImg2(false);
		setShowImg3(false);
		setShowImg4(false);
	};
	const handleImage2 = () => {
		setShowImg2(true);
		setShowImg1(false);
		setShowImg3(false);
		setShowImg4(false);
	};
	const handleImage3 = () => {
		setShowImg3(true);
		setShowImg1(false);
		setShowImg2(false);
		setShowImg4(false);
	};
	const handleImage4 = () => {
		setShowImg4(true);
		setShowImg1(false);
		setShowImg2(false);
		setShowImg3(false);
	};



	const addProduct = () => {
		setItems(items + 1);
	};
	const removeProduct = () => {
		if (items === 0){
			return;
		}
		setItems(items - 1);

	};
	const handleCart = () => {
		setInitialValue(initialValue + items);
	};

	return (
		<div className="row" id="home">
			{showModal && <div className='backdrop'><ModalContent /></div>}
			<div className="col-lg-5">
				<div className="wrapper" data-testid="left-wrapper">
					<div className="main-img">
						{showImg1 && <div className="first-img">
							{/*{showModal ? 'overlay-img': 'active-img'}*/}
							<img src={img1} alt="snickers" className='active-img' onClick={handlerModal}/>
						</div>}
						{showImg2 && <div className="first-img">
							<img src={img2} alt="snickers" className="active-img" onClick={handlerModal}/>
						</div>}
						{showImg3 && <div className="first-img">
							<img src={img3} alt="snickers" className="active-img" onClick={handlerModal}/>
						</div>}
						{showImg4 && <div className="first-img">
							<img src={img4} alt="snickers" className="active-img" onClick={handlerModal}/>
						</div>}


					</div>
					<div className="multiple-img">
						<div className="thumb first-thumb" onClick={handleImage1}>
							{/*fixme border z-index not working*/}
							<img src={thumb1} alt="snickers thumbnail"
								 className={showImg1 ? 'cover border-orange' : 'active-thumb'}/>
						</div>
						<div className="thumb second-thumb" onClick={handleImage2}>
							<img src={thumb2} alt="snickers thumbnail"
								 className={showImg2 ? 'cover border-orange' : 'active-thumb'}/>
						</div>
						<div className="thumb third-thumb" onClick={handleImage3}>
							<img src={thumb3} alt="snickers thumbnail"
								 className={showImg3 ? 'cover border-orange' : 'active-thumb'}/>
						</div>
						<div className="thumb fourth-thumb" onClick={handleImage4}>
							<img src={thumb4} alt="snickers thumbnail"
								 className={showImg4 ? 'cover border-orange' : 'active-thumb'}/>
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
							<div className="new-price">
								<div className="latest-price">
									<p>$125.00</p>
								</div>
								<div className="deduction">
									<p>50%</p>
								</div>
							</div>


							<div className="article-old-price">
								<p>$250</p>
							</div>
						</div>

						<div className="article-footer">
							<div className="item-value">

								<MdRemove id="reduce" onClick={removeProduct}/>


								<div className="article-value">
									{items}
								</div>

								<MdAdd id="add" onClick={addProduct}/>
							</div>
							<button onClick={handleCart} className="btn-cart">
								<svg width="40" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero"/></svg>
								{/*<MdShoppingCart  id='shopping-cart'/>*/}
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
