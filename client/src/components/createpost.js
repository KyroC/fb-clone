import React, {useState, useEffect} from "react";
import axios from 'axios';
import './createpost.css';

export default function CreatePost() {
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("")
    const [postSuccess, setPostSuccess] = useState(false)

    const userId = () => {
        axios.get("https://top-fb.onrender.com/", {withCredentials: true})
            .then((res) => {
                if(res.data.user._id != null)
                {
                setAuthor(res.data.user._id)
                } else {
                    return
                }
            }
            ).catch(e => {
                console.log(e);
            })
    };
    
    const onSubmit =() => {
        const postDetails = {
            'content':content,
            'author': author,
        }

        axios.post('https://top-fb.onrender.com/post/create',postDetails)
            setPostSuccess(true)
    }
    useEffect(() => {
        userId();
    }, [])

    return (
        <div className="create-post">
            <div className="create-post-form">
                <h2> Create Post</h2>
                <form>
                    <label for="post">
                        <input type="text" name="create-post" placeholder="What are you thinking of today?" onChange={e=> setContent(e.target.value)}/>
                    </label>
                    {postSuccess ?
                    <div>Post Success</div> : null}
                    <div className="submit-button-container">
                        <button type="button" className="submit-button" onClick={onSubmit} > Create Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}