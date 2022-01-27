import React, { useState } from 'react';
import "../../styles/Circle.css";

const Circle = () => {
    const [traffic, color] = useState("greenlight");
    return (
        <>
            <button onClick={color("orangelight")}>

            </button><button onClick={color("redlight")}>

            </button>

        </>
    );
};

export default Circle;