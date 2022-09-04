import React from "react";
import s from './Profile.module.css'
import {MyPosts, PostDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsTypeProfile={
    postData:PostDataType[]
    addPost: (postMessage: string) =>void
}

export const Profile = (props:PropsTypeProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                postData={props.postData}
            addPost={props.addPost}
            />
        </div>
    )
}