import React from "react";
import {Post} from "./Post/Post";

type PostDataType={
    post:string
    like:number
    id:number
}

export const MyPosts = () => {

    let postData:PostDataType[]=[
        {post:'Hello. This is my first post', like: 25, id:1},
        {post:'How are you?', like: 15, id:2},
        {post:'Great. Thanks, and you?', like: 65, id:3},
        {post:'I am lucky', like: 21, id:4},
        {post:'Good luck', like: 48, id:5},
    ]
    return (
        <div>
            <h3>My posts</h3>

            <div>
                <textarea value='Write new post'/>
                <div><button>Add</button></div>
            </div>
            {postData.map(p=>
                <Post post={p.post} like={p.like} id={p.id}/>
            )}

        </div>

    )
}