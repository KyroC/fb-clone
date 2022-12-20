import * as React from 'react';
import "./login.css";
import Logo from "../fb-logo.svg";

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
                                <div>
                                    <input type="text" name="username" value="" autocomplete="" />
                                    <input type="text" name="password" value="" autocomplete="" />
                                </div>
                                <div><button value="1" type="submit"></button> </div>
                                <div>-------</div>
                                <div><button>Create new Account</button></div>
                                </form>
                        </div>
                        <div className="page-div"></div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Login;