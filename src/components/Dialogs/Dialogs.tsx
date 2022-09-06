import React from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from "./DialogItem/DialogItem";
import {MessageItem, MessageItemPropsType} from "./Message/Message";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messageReducer";

type PropsType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessageItemPropsType>
    newMessageText: string
    dispatch:(action:{type:string, newPostText?:string, newMessageText?:string})=>void
}

export const Dialogs = (props: PropsType) => {

    let newMessage: any = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageAC())
    }

    let onChangeHandler = ()=>{
        let text=newMessage.current.value
        props.dispatch(updateNewMessageTextAC(text))
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