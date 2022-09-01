import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>

            <div>
                New post
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    )
}