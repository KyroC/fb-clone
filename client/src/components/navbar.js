import React from 'react';
import './navbar.css';
import Logo from '../fb-logo.svg'

export default function Navbar() {


    return(
        <div className="navbar">
            <div className="left_nav">
                <div className="logo"><img src={Logo} /></div>
                <div className="search"></div>
            </div>
            <div className="middle_nav">
                <div className="home"></div>
                <div className="likes"></div>
            </div>
            <div className="right_nav">
                <div className="chat"></div>
                <div className="profile"></div>
            </div>
        </div>
    )
}