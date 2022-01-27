import React from "react";
import ReactDOM from "react-dom";

import Circle from "../component/Circle.jsx";
import Headerstick from "../component/Headerstick.jsx";

import "../../styles/Main.css";

const Main = () => {
	return (
		<>
			<div>
				{/* <Circle></Circle> */}
				<div className="Light">
					<div className="greenlight"></div>
					<div className="orangelight"></div>
					<div className="redlight"></div>
				</div>
			</div>
		</>
	);
};

export default Main;
