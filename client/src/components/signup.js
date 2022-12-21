import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./signup.css"; 
import axios from 'axios';

const Signup = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");


    const onSubmit = () => { 
        const accountDetails = {
            'email': email,
            'password': password,
            'first_name': firstname,
            'last_name': lastname,
            'date_of_birth': dateofbirth,
        }
        console.log(accountDetails)

        axios.post('http://localhost:5000/user/create', accountDetails)
            .then(res => console.log(res.data));
    }

    return (
        <div className ="sign-up">
            <div className="sign-up-form">
                <h2>Sign Up</h2>
                <form>
                    <label for="email">
                        <input type="text" name="email" placeholder="Email"  onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <br />
                    <label for="password">
                        <input type="text" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <br />
                    <label for="first-name">
                        <input type="text" name="first-name" placeholder="First Name" onChange={e => setFirstname(e.target.value)}/>
                    </label><br />
                    <label for="last-name">
                        <input type="text" name="last-name" placeholder="Last Name"  onChange={e => setLastname(e.target.value)}/>
                    </label><br />
                    <label for="date-of-birth">
                        Date of Birth:
                        <input type="date" name="date-of-birth"  onChange={e => setDateofbirth(e.target.value)}/>
                    </label><br />
                    <div className="sign-up-container">
                        <Link to="/">
                            <input type="submit" value="Create Account" className="sign-up-button" data-rel="back" onClick={onSubmit} />
                        </Link>
                    </div>
                    
                </form>
            </div>
        </div>
    )
    
}

export default Signup;