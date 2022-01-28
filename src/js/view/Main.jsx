import React from "react";
import ReactDOM from "react-dom";

import Circle from "../component/Circle.jsx";
import Headerstick from "../component/Headerstick.jsx";

import "../../styles/Main.css";

const Main = () => {
	return (
		<>
			<div className="Light">
				{" "}
				<Circle></Circle>
			</div>
		</>
	);
};

export default Main;
