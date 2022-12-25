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
                <div className="logo"><img src={Logo} /></div>
                </Link>
                <div className="search"><img src={Search} />

                </div>
            </div>
            <div className="middle_nav">
                <Link to="/">
                    <div className="home"><img src={Home} /></div>
                </Link>
                <Link to="/friend">
                <div className="friend"><img src={Friend} /></div>
                </Link>
            </div>
            <div className="right_nav">
                <div className="chat"></div>
                <div className="dropdown">
                    <img src={Profile} class="profile" />
                    <div class="dropdown-content">
                        <a>Profile</a>
                        <a>Setting</a>
                        <a onClick={userLogout}>Log Out</a>
                    </div>    
                </div>
            </div>
        </div>
    )
}