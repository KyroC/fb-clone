import React, {useState, useEffect} from "react";
import axios from 'axios';
import './postfeed.css';

export default function PostFeed() {
    const getContent = () => {
        axios.get('http://localhost:5000/post/detail', {withCredentials: true})
            .then((res) => {
                console.log(res.data)
            })
    }
    useEffect(() => {
        getContent();
    }, [])

    return(
        <div className="post-feed-container">
            Post Feed   
        </div>
    )
}