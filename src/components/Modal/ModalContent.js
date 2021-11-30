import React, {useContext, useState} from 'react';
import img1 from '../../images/image-product-1.jpg';
import img2 from '../../images/image-product-2.jpg';
import img3 from '../../images/image-product-3.jpg';
import img4 from '../../images/image-product-4.jpg';
import thumb1 from '../../images/image-product-1-thumbnail.jpg';
import thumb2 from '../../images/image-product-2-thumbnail.jpg';
import thumb3 from '../../images/image-product-3-thumbnail.jpg';
import thumb4 from '../../images/image-product-4-thumbnail.jpg';
import {ValueContext} from "../../context/ValueContext";
// import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md";

const images = [img1, img2, img3, img4];
const ModalContent = () => {
	const {showModal, setShowModal} = useContext(ValueContext);

	const [activeImg1, setActiveImg1] = useState(true);
	const [activeImg2, setActiveImg2] = useState(false);
	const [activeImg3, setActiveImg3] = useState(false);
	const [activeImg4, setActiveImg4] = useState(false);
	const [currentImg, setCurrentImg] = useState(0);
	const handleImg1 = () => {
		setActiveImg1(true);
		setActiveImg2(false);
		setActiveImg3(false);
		setActiveImg4(false);
	};
	const handleImg2 = () => {
		setActiveImg1(false);
		setActiveImg2(true);
		setActiveImg3(false);
		setActiveImg4(false);
	};
	const handleImg3 = () => {
		setActiveImg1(false);
		setActiveImg2(false);
		setActiveImg3(true);
		setActiveImg4(false);
	};
	const handleImg4 = () => {
		setActiveImg1(false);
		setActiveImg2(false);
		setActiveImg3(false);
		setActiveImg4(true);
	};

	// const allImages =[];
	// for (let i=0; i<images.length; i++){
	// 	console.log(i);
	// 	allImages.push(i)
	// }

	const toggleAdd = () => {
		// setCurrentImg();
		alert('not ready yet. imagine the pictures are changing :)');
	};
	const toggleRemove = () => {
		// setCurrentImg();
		alert('not ready yet. imagine the pictures are changing :)');
	};


	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className="modal-container">
			<button onClick={closeModal} className="close-modal">
				<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
						fill="none" fillRule="evenodd"/>
				</svg>
			</button>
			<div className="show-modal">
				<div className="modal-main">
					{/*todo butoane stanga dreapta actiune*/}
					<button className="left-btn-modal" onClick={toggleRemove}>
						<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
						</svg>
					</button>
					<button className="right-btn-modal" onClick={toggleAdd}>
						<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
						</svg>
					</button>
					{/*active-modal-img*/}
					<img src={img1} alt="snickers" className={activeImg1 ? 'active-modal-img' : 'modal-img'}/>
					<img src={img2} alt="snickers" className={activeImg2 ? 'active-modal-img' : 'modal-img'}/>
					<img src={img3} alt="snickers" className={activeImg3 ? 'active-modal-img' : 'modal-img'}/>
					<img src={img4} alt="snickers" className={activeImg4 ? 'active-modal-img' : 'modal-img'}/>
				</div>
			</div>
			<div className="thumb-modal">
				<img src={thumb1} alt="snickers" onClick={handleImg1}
					 className={activeImg1 ? 'blur-img' : ''}/>
				<img src={thumb2} alt="snickers" onClick={handleImg2}
					 className={activeImg2 ? 'blur-img' : ''}/>
				<img src={thumb3} alt="snickers" onClick={handleImg3}
					 className={activeImg3 ? 'blur-img' : ''}/>
				<img src={thumb4} alt="snickers" onClick={handleImg4}
					 className={activeImg4 ? 'blur-img' : ''}/>
			</div>
		</div>

	);
};

export default ModalContent;
