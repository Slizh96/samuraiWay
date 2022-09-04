import React from "react";
import {Post} from "./Post/Post";

export type PostDataType = {
    post: string
    like: number
    id: number
}

type MyPostsPropsType = {
    postData: PostDataType[]
}
export const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div>
            <h3>My posts</h3>

            <div>
                <textarea value='Write new post'/>
                <div>
                    <button>Add</button>
                </div>
            </div>
            {props.postData.map((p: PostDataType) => <Post post={p.post} like={p.like} id={p.id}/>)}

        </div>

    )
}