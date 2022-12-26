import React from 'react';
import './navbar.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Logo from '../fb-logo.svg';
import Search from '../search-icon.svg';
import Home from '../home_icon.svg';
import Profile from '../profile_icon.svg';
import Friend from '../friend_icon.svg';
import {Link} from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate()

    const userLogout = () => {
        axios.get("/log-out", {withCredentials: true})
            .then((res) => {
                console.log(res)
            })
            .then(navigate('/login')
        )
    };


    return(
        <div className="navbar">
            <div className="left_nav">
                <Link to="/">
                <div className="logo"><img src={Logo} alt="logo-icon" /></div>
                </Link>
                <div className="search"><img src={Search} alt="search-icon" />

                </div>
            </div>
            <div className="middle_nav">
                <Link to="/">
                    <div className="home"><img src={Home} alt='home-icon' /></div>
                </Link>
                <Link to="/user">
                <div className="user"><img src={Friend} alt='friend-icon' /></div>
                </Link>
            </div>
            <div className="right_nav">
                <div className="chat"></div>
                <div className="dropdown">
                    <img src={Profile} class="profile" alt='profile-icon' />
                    <div class="dropdown-content">
                        <p>Profile</p>
                        <p>Setting</p>
                        <p onClick={userLogout}>Log Out</p>
                    </div>    
                </div>
            </div>
        </div>
    )
}