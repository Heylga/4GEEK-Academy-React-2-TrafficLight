import React, { useState } from "react";
import "../../styles/Circle.css";

const Circle = () => {
	const [light, setLight] = useState("");
	return (
		<>
			<button className="" onClick={setLight("orangelight")}></button>
			<button
				className="oranglight"
				onClick={setLight("orangelight")}></button>
			<button
				className="redlight"
				onClick={setLight("redlight")}></button>
		</>
	);
};

export default Circle;
