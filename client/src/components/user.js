import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/navbar'
import './user.css';

export default function UserList() {
    const [getUsers, setGetUsers] = useState({})
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
            {Array.isArray(getUsers)
            ? getUsers.map(element => {
                return(
                    <div className="user-list-grid">
                        <div className="user-list">
                            <div classNem="user-details">
                                <h2>{element.first_name} {element.last_name}</h2>  
                            </div>
                            <div className="user-button">
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