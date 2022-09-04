import React from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from "./DialogItem/DialogItem";
import {MessageItem, MessageItemPropsType} from "./Message/Message";

type PropsType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessageItemPropsType>
    newMessageText: string
    addMessage: () => void
    updateMessageText: (newMessageText: string) => void
}

export const Dialogs = (props: PropsType) => {

    let newMessage: any = React.createRef();

    let sendMessage = () => {
        props.addMessage()
    }

    let onChangeHandler = ()=>{
        props.updateMessageText(newMessage.current.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map((d) =>
                    <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>

                {props.messageData.map((m,) =>
                    <MessageItem id={m.id} message={m.message}/>)}
                <textarea
                    ref={newMessage}
                    value={props.newMessageText}
                onChange={onChangeHandler}
                />
                <button onClick={sendMessage}>send mess</button>
            </div>
        </div>
    )
}