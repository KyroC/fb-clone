import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import {Link} from 'react-router-dom';
import './user.css';

export default function UserList() {
    const [getUsers, setGetUsers] = useState({})
    const getContent = () => {
        axios.get('/user', {withCredentials: true})
            .then((res) => {
                setGetUsers(res.data)
            })
    }
    useEffect(() => {
        getContent();
    }, [])

    return(
        <div>
            <Navbar />
            <div className="user-list-container">
            {Array.isArray(getUsers)
            ? getUsers.map(element => {
                return(
                    <div className="user-list-grid">
                        <div className="user-list">
                            <div className="user-details">
                                <Link to = {"/user/" + element._id} className ="link-styles">
                                    <h2>{element.first_name} {element.last_name}</h2>  
                                </Link>
                            </div>
                            <div className="user-button" >
                                <button type="button">Add Friend</button>
                        </div>
                        </div>
                        
                    </div>  
                )
            })
            
            
           : null }
           </div>
        </div>
    )
}