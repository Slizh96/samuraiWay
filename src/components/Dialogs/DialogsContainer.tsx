import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messageReducer";
import {StateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

// type PropsType = {
//     store: StoreType
// }
//
// export const DialogsContainer = (props: PropsType) => {
//
//     let state: StateType = props.store.getState();
//
//     let sendMessage = () => {
//         props.store.dispatch(addMessageAC())
//     }
//
//     let onChangeHandler = (text: string) => {
//         props.store.dispatch(updateNewMessageTextAC(text))
//     }
//
//     return (
//         <Dialogs updateNewMessageText={onChangeHandler}
//                  sendMessage={sendMessage}
//                  messagePage={state.messagePage}/>
//     )
// }

let mapStateToProps = (state: StateType) => {
    return {
        messagePage: state.messagePage
    }
};

let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageText: (text:string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        },
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) //сначала отрабатывают 1 скобки, потом идет вызов вторых скобок

