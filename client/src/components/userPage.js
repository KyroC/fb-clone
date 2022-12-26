import React from 'react';
import Navbar from '../components/navbar'
import './user.css';

export default function UserPage() {
    return(
        <div>
            <Navbar />
            <div className="user-list-container">
                User Page   
           </div>
        </div>
    )
}