import React, {useState} from "react";
import TheNavbar from "./components/UI/TheNavbar";
import Home from "./components/Home";
import {ValueContext} from "./context/ValueContext";
import { FaTimes} from "react-icons/fa";

function App() {
    const [initialValue, setInitialValue]=useState(0);
	const [showModal, setShowModal] = useState(true);
	const handlerModal = () => {
		setShowModal(false);
	};


	return (
		<ValueContext.Provider value={{initialValue, setInitialValue}} >
			<div className="container">
				<TheNavbar/>
				{/*fixme overlay*/}
				<Home />
			</div>
		</ValueContext.Provider>

	);
}

export default App;
