import React from "react";
import s from './../Dialogs.module.css'


export type MessageItemPropsType = {
    message: string
    id:number
}

export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
