import React from "react";
import React, { useState } from 'react';
import "../../styles/Circle.css";

const Circle = () => {
    const [traffic, color] = useState("");
    return (
        <>
            <button className='greenlight' onClick={color("orangelight")}></button>
            <button className='oranglight' onClick={color("orangelight")}></button>
            <button className="redlight" onClick={color("redlight")}></button>
        </>
    );
};

export default Circle;