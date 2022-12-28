import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, Navigate} from "react-router-dom";
import Navbar from './navbar.js';
import MessageFeed from "./messagefeed"

export default function Home(){

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({})

    const userCheck = () => {
        axios.get("/", {withCredentials: true})
            .catch(e => {
                console.log(e);
            })
            .then((res) => {
                setCurrentUser(res.data.user)
            }
        )
    };
    const userLogout = () => {
        axios.get("https://top-fb.onrender.com/log-out", {withCredentials: true})
            .then(navigate('/login')
        )
    };
    
    useEffect(() => {
        userCheck();    
    },[]);
    if (!currentUser) {
        return(
            <Navigate to="/login" replace={true} />
            )
    } else {
        return(
            <div>
                <Navbar />
                <MessageFeed />
                <button type="button" style={{marginTop:"60px"}} onClick={userLogout}>Log out</button>
            </div>
        )
    }
}