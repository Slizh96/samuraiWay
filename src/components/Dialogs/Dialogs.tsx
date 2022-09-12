import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {MessagePageType} from "../../redux/store";

type PropsType = {
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
    messagePage: MessagePageType
}

export const Dialogs = (props: PropsType) => {

    let sendMessage = () => {
        props.sendMessage()
    }

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagePage.dialog.map((d) =>
                    <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>

                {props.messagePage.message.map((m,) =>
                    <MessageItem key={m.id} id={m.id} message={m.message}/>)}
                <textarea
                    value={props.messagePage.mewMessageText}
                    onChange={onChangeHandler}
                />
                <button onClick={sendMessage}>send mess</button>
            </div>
        </div>
    )
}