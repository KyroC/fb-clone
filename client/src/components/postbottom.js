import React, {useState, useEffect} from "react";
import axios from 'axios';
import './postbottom.css';
import icon_comment from '../comment_icon.svg';
import thumb_icon from '../thumb_icon.svg';

export default function PostBottom({postDetails, getContentParent}) {
    const [open,setOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [author, setAuthor] = useState("");
    const [getComments, setGetComments] = useState([]);
    


    const userId = () => {
        axios.get("/", {withCredentials: true})
            .then((res) => {
                setAuthor(res.data.user._id)
            }
        )
    };

    
    const userComment = () => {
        const id = {postDetails}.postDetails._id
        const commentDetails= {
            content: comment,
            author: author,
            post: id
        }
        axios.post("http://localhost:5000/comment/create", commentDetails)
            .then(res =>(console.log(res.data)));
        getContentParent();
        setGetComments({postDetails}.postDetails.comments)
    }
    useEffect(() => {
        userId();
    },[])

    const toggle = () => {
        setOpen(!open)
        setGetComments({postDetails}.postDetails.comments)
    }
    return (
        <div className="post-bottom-container">
            <div className="button-container">
                <div className="like-button">
                    <div className="like-icon">
                        <img src={thumb_icon}></img>
                        <a> like</a>
                    </div>
                </div>
                <div className="comment-button" onClick={toggle}>
                    <div className="comment-icon">
                        <img src={icon_comment}></img>
                        <a>Comment</a>
                    </div>
                </div>
                <div className="share-button">Share</div>   
            </div>
            {open?
            <div className="comment-container">
                {getComments.slice(0).reverse().map(element => {
                        return (
                            <div className="comment-feed-container">
                                <div className="comment">
                                    <p> 
                                        Author: {element.author}
                                    </p>
                                    <p>
                                        Comment: {element.content}
                                    </p>
                                </div>

                        </div>
                    )
                    })}
                <div> 
                    <input className="comment-input" onChange={e=>setComment(e.target.value)}></input> 
                    <button type="button" className="comment-submit-button" onClick ={userComment}>Comment</button>
                </div>
            </div>:null}
        </div>
    )
}