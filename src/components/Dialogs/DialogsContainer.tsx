import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messageReducer";
import {StateType, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {

    let state:StateType=props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    let onChangeHandler = (text:string)=>{
        props.store.dispatch(updateNewMessageTextAC(text))
    }

    return (
        <Dialogs updateNewMessageText={onChangeHandler}
                 sendMessage={sendMessage}
        messagePage={state.messagePage}/>
    )
}