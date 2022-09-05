import React from "react";
import s from './Profile.module.css'
import {MyPosts, PostDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsTypeProfile = {
    postData: PostDataType[]
    dispatch:(action:{type:string, newPostText?:string, newMessageText?:string})=>void
    newPostText:string
}

export const Profile = (props: PropsTypeProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                postData={props.postData}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    )
}