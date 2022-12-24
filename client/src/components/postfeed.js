import React, {useState, useEffect} from "react";
import axios from 'axios';
import './postfeed.css';
import PostBottom from "./postbottom";

export default function PostFeed() {
    const [getPosts, setGetPosts] = useState({})
    const getContent = () => {
        axios.get('http://localhost:5000/post/detail', {withCredentials: true})
            .then((res) => {
                setGetPosts(res.data)
                console.log(res.data)
            })
    }
    useEffect(() => {
        getContent();
    }, [])

    return(
        <div className="post-feed-container">
            {Array.isArray(getPosts)
            ? getPosts.slice(0).reverse().map(element => {
                return (
                    <div className="post-container">
                        <div className="post-top">
                            <h2>{element.author.first_name} {element.author.last_name}</h2>
                            <p>
                                {element.content}
                            </p>
                            <p>
                                {element.comment}
                            </p>
                            
                        </div>
                        <div className="post-bottom">
                            <PostBottom postId={element._id}/>
                        </div>
                    </div>
                )
            })
        : null}
        </div>
    )
}