import React from "react";
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

export type PostDataType = {
    post: string
    like: number
    id: number
}

type MyPostsPropsType = {
    postData: PostDataType[]
    dispatch: (action: any) => void
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement:any = React.createRef()

    let addPostHandler = () => {
        props.dispatch(addPostAC());
    }

    let onPostChange = () => {
        let text=newPostElement.current.value
        props.dispatch(updateNewPostTextAC(text))
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
            {props.postData.map((p: PostDataType) => <Post post={p.post} like={p.like} id={p.id}/>)}

        </div>

    )
}