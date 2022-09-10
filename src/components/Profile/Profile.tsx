import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsTypeProfile = {
    store:any
    // store:StoreType
}

export const Profile = (props: PropsTypeProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}