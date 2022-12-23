import React, {useState, useEffect} from "react";
import axios from 'axios';
import './postbottom.css';
import icon_comment from '../comment_icon.svg';
import thumb_icon from '../thumb_icon.svg';
export default function PostBottom() {

    const [open,setOpen] = useState(false)

    const toggle = () => {setOpen(!open)}
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
                <div> <input></input> </div>
            </div>:null}
        </div>
    )
}