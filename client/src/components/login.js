import * as React from 'react';
import "./login.css";
import Logo from "../fb-logo.svg";
import {Link } from "react-router-dom";

function Login() {
    return (
        <div className="container">
            <div className="interface">
                <div className="inner-interface">
                    <div className="left-text">
                        <div className="top-logo"><img src={Logo} /></div>
                        <h2 className="motto-text">Facebook helps you connect and share with the people in your life.</h2>
                    </div>
                    <div className="log-in-container">
                        <div className="log-in-form">
                            <form className="form-template">
                                <div className="inputs">
                                    <input type="text" name="username" value="" autocomplete="" placeholder="Email Address" /> <br />
                                    <input type="text" name="password" value="" autocomplete="" placeholder="Password" />
                                </div>
                                <div className="log-in-button-container"><button value="1" className="log-in-button" type="submit"> Log In </button> </div>
                                <div>----------------------------------------------</div>
                                <div className="sign-up-container">
                                    <Link to="/sign-up"><button className="sign-up-button">Create New Account</button></Link >
                                    </div>
                                </form>
                        </div>
                        <div className="business-page-div"></div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Login;