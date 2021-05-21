import React from 'react';
import {Link} from "react-router-dom";

function CustomButton2({text, link}) {
    return (
        <div className="customButton2Wrapper">
            <Link to={link} className="customButton2Link">
                <button className="btn2_Wrapper">
                    {text}
                </button>
            </Link>
        </div>
    )
}

export default CustomButton2
