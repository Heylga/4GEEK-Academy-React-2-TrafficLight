import React, { useState } from "react";
import "../../styles/Circle.css";

const Circle = () => {
	const [light, setLight] = useState("");
	return (
		<>
			<button className="greenlight"></button>
			<button className="orangelight"></button>
			<button className="redlight"></button>
		</>
	);
};

export default Circle;
