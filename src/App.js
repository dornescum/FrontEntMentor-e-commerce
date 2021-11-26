import React, {useState} from "react";
import TheNavbar from "./components/UI/TheNavbar";
import Home from "./components/Home";
import {ValueContext} from "./context/ValueContext";

function App() {
    const [initialValue, setInitialValue]=useState(0);
	return (
		<ValueContext.Provider value={{initialValue, setInitialValue}} >
			<div className="container">
				<TheNavbar/>
				<Home/>
			</div>
		</ValueContext.Provider>

	);
}

export default App;
