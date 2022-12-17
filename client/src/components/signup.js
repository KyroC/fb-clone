import React, {useState} from "react";

const Signup = () => {

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");

    return (
        <div className ="sign-up">
            <div className="sign-up-form">
                <h2>Sign up for an account</h2>
                <form>
                <label for="email">
                    Email:
                    <input type="text" name="email" />
                </label>
                <br />
                <label for="password">
                    Password: 
                    <input type="text" name="password" />
                </label>
                <br />
                <label for="first-name">
                    First Name:
                    <input type="text" name="first-name" />
                </label><br />
                <label for="last-name">
                    Last Name:
                    <input type="text" name="last-name" />
                </label><br />
                <label for="date-of-birth">
                    Date of Birth:
                    <input type="date" name="date-of-birth" />
                </label><br />
                <input type="submit" value="Create Account" />
                </form>
            </div>
        </div>
    )
    
}

export default Signup;