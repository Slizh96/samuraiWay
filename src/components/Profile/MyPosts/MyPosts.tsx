import React from "react";
import {Post} from "./Post/Post";

export type PostDataType = {
    post: string
    like: number
    id: number
}

type MyPostsPropsType = {
    posts: PostDataType[]
    addPost: ()=>void
    updateNewPostText:(text:string)=>void
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement:any = React.createRef()

    let addPostHandler = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text=newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3>My posts</h3>

            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
                <div>
                    <button onClick={addPostHandler}>Add</button>
                </div>
            </div>
            {props.posts.map((p: PostDataType) => <Post key={p.id} post={p.post} like={p.like} id={p.id}/>)}

        </div>

    )
}