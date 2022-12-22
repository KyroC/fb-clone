import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, Navigate} from "react-router-dom"

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
                Logged in
                <button type="button" onClick={userLogout}>Log out</button>
            </div>
        )
    }
}