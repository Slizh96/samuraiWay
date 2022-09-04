import React from "react";
import {Post} from "./Post/Post";

export type PostDataType = {
    post: string
    like: number
    id: number
}

type MyPostsPropsType = {
    postData: PostDataType[]
    addPost: (postMessage: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement: any = React.createRef()

    let addPostHandler = () => {
        props.addPost(newPostElement.current.value);
        newPostElement.current.value=''
    }

    return (
        <div>
            <h3>My posts</h3>

            <div>
                <textarea ref={newPostElement}/>
                <div>
                    <button onClick={addPostHandler}>Add</button>
                </div>
            </div>
            {props.postData.map((p: PostDataType) => <Post post={p.post} like={p.like} id={p.id}/>)}

        </div>

    )
}