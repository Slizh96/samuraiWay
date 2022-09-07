import React from "react";
import s from './Friends.module.css'
import {FriendsBlockType} from "../../../redux/store";

type FriendsPropsType = {
    friendsBlock: FriendsBlockType[]
}

export const Friends = (props: FriendsPropsType) => {
    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            <div className={s.friendsItem}>
                {props.friendsBlock.map((f) => (
                    <div>
                        <img src={f.src} alt=""/>
                        <div>{f.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
