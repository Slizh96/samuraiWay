import {MessagePageType} from "./store";

let initialState: MessagePageType = {
    message: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: "What's new?"},
        {id: 4, message: "I'm fine"},
        {id: 5, message: "I'm lucky"},
        {id: 6, message: 'Great'}
    ],
    dialog: [
        {id: 1, name: 'Olya'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Valentina'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Max'},
        {id: 6, name: 'Tim'},
    ],
    mewMessageText: ''
}

export const messageReducer = (state = initialState, action: any) => {
    let stateCopy;
    switch (action.type) {
        case 'ADD-MESSAGE':
            let body = state.mewMessageText;
            stateCopy = {
                ...state,
                mewMessageText : '',
                message: [...state.message, {
                    message: body,
                    id: 1
                }],

            };
            return stateCopy;

        case 'UPDATE-MESSAGE-TEXT':
            stateCopy = {...state, mewMessageText: action.newMessageText};
            return stateCopy;

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