import React from "react";
import './messagefeed.css'
import CreatePost from "./createpost";
import PostFeed from "./postfeed";

export default function MessageFeed() {

    return(
        <div className="message-feed">
            <div className="create-post">
                <CreatePost />
            </div>
            <div className="post-feed">
             <PostFeed />
            </div>
        </div>
    )
}