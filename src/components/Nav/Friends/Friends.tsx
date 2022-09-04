import React from "react";
import s from './Friends.module.css'
import {friendsBlockType} from "../../../redux/state";

type FriendsPropsType = {
    friendsBlock: friendsBlockType[]
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
