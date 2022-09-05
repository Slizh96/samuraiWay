import {DialogsItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessageItemPropsType} from "../components/Dialogs/Message/Message";
import {PostDataType} from "../components/Profile/MyPosts/MyPosts";

export  type StoreType = {
    _state: StateType
    getState: any
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: any) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {post: 'Hello. This is my first post', like: 25, id: 1},
                {post: 'How are you?', like: 15, id: 2},
                {post: 'Great. Thanks, and you?', like: 65, id: 3},
                {post: 'I am lucky', like: 21, id: 4},
                {post: 'Good luck', like: 48, id: 5},
            ],
            newPostText: ''
        },
        messagePage: {
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
        },
        friendsBlock: [
            {src: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', name: 'Roni'},
            {src: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', name: 'Bin'},
            {src: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', name: 'Tom'},
        ]
    },
    _callSubscriber(state: StateType) {
        console.log()
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            {
                let newPost: PostDataType = {
                    post: this._state.profilePage.newPostText,
                    like: 25,
                    id: 1
                };
                this._state.profilePage.post.push(newPost)
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            }
        } else if (action.type === 'UPDATE-POST-TEXT') {
            {
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber(this._state);
            }
        } else if (action.type === 'ADD-MESSAGE') {
            {
                let newMessage: MessageItemPropsType = {
                    message: this._state.messagePage.mewMessageText,
                    id: 1
                };
                this._state.messagePage.message.push(newMessage)
                this._state.messagePage.mewMessageText = '';
                this._callSubscriber(this._state);
            }
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            {
                this._state.messagePage.mewMessageText = action.newMessageText
                this._callSubscriber(this._state);
            }
        }
    }
}

export type StateType = {
    profilePage: profilePageType,
    messagePage: MessagePageType,
    friendsBlock: friendsBlockType[]
}
type profilePageType = {
    post: PostDataType[]
    newPostText: string
}
type MessagePageType = {
    message: MessageItemPropsType[],
    dialog: DialogsItemPropsType[],
    mewMessageText: string
}
export  type friendsBlockType = {
    src: string
    name: string
}

