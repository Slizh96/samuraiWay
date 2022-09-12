import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/store";
import {connect} from "react-redux";

// type MyPostsContainerPropsType = {
//     store: StoreType
// }
//
// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//
//     let state:StateType=props.store.getState();
//
//
//     let addPostHandler = () => {
//         props.store.dispatch(addPostAC());
//     }
//
//     let onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//
//     return (<MyPosts updateNewPostText={onPostChange}
//                      addPost={addPostHandler}
//                      posts={state.profilePage.post}
//                      newPostText={state.profilePage.newPostText}
//
//     />)
// }

let mapStateToProps=(state:StateType)=>{
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch:any)=>{
    return {
        updateNewPostText: (text:string)=>{
            dispatch(updateNewPostTextAC(text))
        },
        addPost: ()=>{
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)