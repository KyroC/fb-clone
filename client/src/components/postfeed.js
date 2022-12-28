import React, {useState, useEffect} from "react";
import axios from 'axios';
import './postfeed.css';
import {Link} from 'react-router-dom';
import PostBottom from "./postbottom";

export default function PostFeed() {
    const [currentUser, setCurrentUser] = useState({})
    const deletePost = (e) => {
        axios.delete('https://top-fb.onrender.com/post/' + e + '/delete', {withCredentials: true})
    }
    const userCheck = () => {
        axios.get("https://top-fb.onrender.com/", {withCredentials: true})
            .then((res) => {
                if(res.data.user._id != null)
                {
                setCurrentUser(res.data.user._id)
                } else {
                    return
                }
            }
        )
        .catch(e => {
            console.log(e);
        })
    };
    const [getPosts, setGetPosts] = useState({})
    const getContent = () => {
        axios.get('https://top-fb.onrender.com/post/detail', {withCredentials: true})
            .then((res) => {
                if(res.data != null)
                {
                setsetGetPosts(res.data)
                } else {
                    return
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        getContent();
        userCheck();

    }, [])

    return(
        <div className="post-feed-container">
            {Array.isArray(getPosts)
            ? getPosts.slice(0).reverse().map(element => {
                return (
                    <div className="post-container">
                        <div className="post-top">
                            <Link to={"/user/" + element._id} className="link-styles">
                            <h2>{element.author.first_name} {element.author.last_name}</h2>
                            </Link >
                            <p>
                                {element.content}
                            </p>
                            <p>
                                {element.comment}
                            </p>
                            {element.author._id != null ?
                            <div>{(element.author._id === currentUser._id) ?
                            <div>
                                <button type="button" onClick={() => deletePost(element._id)}>Delete</button>
                            </div> : null}</div> : null }
                        </div>
                        <div className="post-bottom">
                            <PostBottom postDetails = {element} getContentParent = {getContent}/>
                        </div>
                    </div>
                )
            })
        : null}
        </div>
    )
}