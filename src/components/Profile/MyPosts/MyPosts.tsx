import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>

            <div>
                <textarea value='Write new post'/>
                <div><button>Add</button></div>
            </div>
            <Post post='Hello. This is my first post' like={25}/>
            <Post post='How are you?' like={15}/>
            <Post post='Great. Thanks, and you?' like={38}/>
            <Post post='I am lucky' like={51}/>
            <Post post='Good luck' like={85}/>
        </div>

    )
}