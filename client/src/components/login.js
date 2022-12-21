import {React, useState} from 'react';
import "./login.css";
import Logo from "../fb-logo.svg";
import { Link } from "react-router-dom";
import  axios from "axios";

function Login() {
    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");

    const onSubmit = () => {
        const loginDetails = {
            "username": user,
            "password": password,
        };
        console.log(loginDetails)
        axios.post("http://localhost:5000/login", loginDetails, {withCredentials: true})
            .then(res => console.log(res));
    }

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
                                    <input type="text" name="username" placeholder="Email Address" onChange={e => setUser(e.target.value)} /> <br />
                                    <input type="text" name="password" placeholder="Password" onChange = {e => setPassword(e.target.value)}/>
                                </div>
                                <Link to="/">
                                <div className="log-in-button-container"><button type="button" className="log-in-button" onClick={onSubmit}> Log In </button> </div>
                                </Link>
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