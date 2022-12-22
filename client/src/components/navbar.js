import React from 'react';
import './navbar.css';
import Logo from '../fb-logo.svg';
import Search from '../search-icon.svg';
import Home from '../home_icon.svg';
import Thumb from '../thumb_icon.svg';
import Profile from '../profile_icon.svg'

export default function Navbar() {


    return(
        <div className="navbar">
            <div className="left_nav">
                <div className="logo"><img src={Logo} /></div>
                <div className="search"><img src={Search} /></div>
            </div>
            <div className="middle_nav">
                <div className="home"><img src={Home} /></div>
                <div className="likes"><img src={Thumb} /></div>
            </div>
            <div className="right_nav">
                <div className="chat"></div>
                <div className="profile"><img src={Profile} /></div>
            </div>
        </div>
    )
}