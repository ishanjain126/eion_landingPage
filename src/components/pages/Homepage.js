import React from 'react';
import Introsection from "../sections/Introsection";
import AboutEion from "../sections/AboutEion";
import Navbar from "../sections/Navbar";

function Homepage() {
    return (
        <div>
            <Navbar />
            <Introsection />
            <AboutEion />
        </div>
    )
}

export default Homepage

