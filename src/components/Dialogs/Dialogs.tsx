import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type DialogsItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogsItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' +props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemPropsType={
    message:string
}

const MessageItem = (props:MessageItemPropsType)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name='Olya'/>
                <DialogItem id={2} name='Sergey'/>
                <DialogItem id={3} name='Valentina'/>
                <DialogItem id={4} name='Alex'/>
                <DialogItem id={5} name='Max'/>
                <DialogItem id={6} name='Tim'/>
            </div>
            <div className={s.messages}>
                <MessageItem message='Hello'/>
                <MessageItem message='How are you'/>
                <MessageItem message="What's new?"/>
                <MessageItem message="I'm fine"/>
                <MessageItem message="I'm lucky"/>
                <MessageItem message='Great'/>
            </div>
        </div>
    )
}