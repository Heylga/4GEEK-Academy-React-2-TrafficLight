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
                <div className="Container flexbox">
                    <div className="greenlight">fdhgfh</div>
                    <div className="orangelight"></div>
                    <div className="redlight"></div>

                    <h1 className="text-center mt-5">Hello Rigo!</h1>
                    <p>
                        <img src={rigoImage} />
                    </p>
                    <a href="#" className="btn btn-success">
                        If you see this green button... bootstrap is working...
                    </a>
                    <p>
                        Made by{" "}
                        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
                        love!
                    </p>

                </div>
            </div>
        </>
    );
};

export default Main;
