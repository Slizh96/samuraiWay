import {MessageItemPropsType} from "../components/Dialogs/Message/Message";


export const messageReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageItemPropsType = {
                message: state.mewMessageText,
                id: 1
            };
            state.message.push(newMessage)
            state.mewMessageText = '';
            return state;
        case 'UPDATE-MESSAGE-TEXT':

            state.mewMessageText = action.newMessageText
            return state;
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const updateNewMessageTextAC = (text: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newMessageText: text
    }
}