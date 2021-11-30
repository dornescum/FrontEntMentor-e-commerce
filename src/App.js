import React, {useState} from "react";
import TheNavbar from "./components/UI/TheNavbar";
import Home from "./components/Home";
import {ValueContext} from "./context/ValueContext";
import TheFooter from "./components/UI/TheFooter";

function App() {
    const [initialValue, setInitialValue]=useState(0);
	const [showSidebar, setShowSidebar] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const productValue = 125;



	return (
		<ValueContext.Provider value={{
			initialValue, setInitialValue, showSidebar, setShowSidebar, showModal, setShowModal, productValue}} >
			<div className="container">
				<TheNavbar />
				<Home />
				<TheFooter />
			</div>
		</ValueContext.Provider>

	);
}

export default App;
