import React from 'react';
// import {absoluteURL} from "../../utils";
import CustomButton2 from "../helpers/CustomButton2";

function AboutEion() {
    return (
        <div className="aboutWrapper" >
            <div className="about">
                <div className="about_heading">
                    About us
                </div>
                <div className="about_content">
                    A smart and interactive system designed to help you take your 
                    business online, grow your customer base and deliver excellent 
                    services to your customers. Using EION you can reach out to your
                    customers easily and vice versa. Learn more about us here. 
                </div>
            </div>
            <div className="about_button">
                <CustomButton2 
                text="Learn More"
                link = "/"
                />
            </div>
        </div>
    )
}

export default AboutEion
