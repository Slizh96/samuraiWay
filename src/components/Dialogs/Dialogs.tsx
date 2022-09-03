import React from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from "./DialogItem/DialogItem";
import {MessageItem, MessageItemPropsType} from "./Message/Message";

type PropsType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessageItemPropsType>
}

export const Dialogs = (props:PropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map((d) =>
                    <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>

                {props.messageData.map((m, ) =>
                    <MessageItem id={m.id}  message={m.message}/>)}
            </div>
        </div>
    )
}