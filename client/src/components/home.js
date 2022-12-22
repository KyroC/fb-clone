import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, Navigate} from "react-router-dom";
import Navbar from './navbar.js';

export default function Home(){

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({})

    const userCheck = () => {
        axios.get("/", {withCredentials: true})
            .then((res) => {
                setCurrentUser(res.data.user)
                console.log(res.data.user)
            }
        )
    };
    const userLogout = () => {
        axios.get("/log-out", {withCredentials: true})
            .then((res) => {
                console.log(res)
            })
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
                < Navbar />
                <button type="button" style={{marginTop:"60px"}} onClick={userLogout}>Log out</button>
            </div>
        )
    }
}