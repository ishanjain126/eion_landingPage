import React, {useState, useEffect} from 'react';
import {absoluteURL} from "../../utils";

function Navbar() {
    const [tabColor, setTabColor] = useState("#f7f7f7");
    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY > 100){
                setTabColor("#ffffff")
            }
            else{
                setTabColor("#f7f7f7")
            }
        }
    }, [])
    console.log(tabColor)
    return (
        <div className="navbarWrapper">
            <nav className="navbar navbar-inverse"  style={{backgroundColor:`${tabColor}`}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    <a className="navbar-brand" href="/"><img src={absoluteURL("/eionlogo.png")} className="logo_image" alt="" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a href="/" className="nav-links">Home</a></li>
                        <li><a href="/" className="nav-links">About Us</a></li>
                        <li><a href="/" className="nav-links">Pricing</a></li>
                        <li><a href="/" className="nav-links">Download Now</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
    </div>
    )
}

export default Navbar
