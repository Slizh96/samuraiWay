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
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemPropsType = {
    message: string
    id:number
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData: Array<DialogsItemPropsType> = [
        {id: 1, name: 'Olya'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Valentina'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Max'},
        {id: 6, name: 'Tim'},
    ]

    let messageData: Array<MessageItemPropsType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: "What's new?"},
        {id: 4, message: "I'm fine"},
        {id: 5, message: "I'm lucky"},
        {id: 6, message: 'Great'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((d) =>
                    <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>

                {messageData.map((m, ) =>
                    <MessageItem id={m.id}  message={m.message}/>)}
            </div>
        </div>
    )
}