import React from "react";
import ReactDOM from "react-dom";
import React, { useState } from 'react';

import Circle from "../component/Circle.jsx"
import Headerstick from "../component/Headerstick.jsx"

import "../styles/Main.css";
import Main from "./component/Main.jsx";


const Main = () => {
    return (
        <>
            <div>
            <Circle></Circle>
                <div className="light">
                    <div className="greenlight"></div>
                    <div className="orangelight"></div>
                    <div className="redlight"></div>

                </div>
            </div>
        </>
    );
};

export default Main;
