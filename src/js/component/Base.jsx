import React, { useState } from 'react';

const Main = () => {
    const [traffic, color] = useState ("");
    return (
        <button onClick={color("orangelight")}></button>
        <button onClick={color("redlight")}></button>
    );
};

export default Main;