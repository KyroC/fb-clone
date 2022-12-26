import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/navbar'
import './user.css';

export default function UserPage() {
    const getContent = () => {
        axios.get('http://localhost:5000/user', {withCredentials: true})
            .then((res) => {
                setGetUsers(res.data)
                console.log(res.data)
            })
    }
    useEffect(() => {
        getContent();
    }, [])

    return(
        <div>
            <Navbar />
            <div className="user-list-container">
                User Page
           </div>
        </div>
    )
}