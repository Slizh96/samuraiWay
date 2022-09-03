import {DialogsItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessageItemPropsType} from "../components/Dialogs/Message/Message";
import {PostDataType} from "../components/Profile/MyPosts/MyPosts";

export type StateType = {
    profilePage: profilePageType,
    messagePage: MessagePageType
}
type profilePageType = {
    post: PostDataType[]
}
type MessagePageType = {
    message: MessageItemPropsType[],
    dialog: DialogsItemPropsType[]
}

export let state: StateType = {
    profilePage: {
        post: [
            {post: 'Hello. This is my first post', like: 25, id: 1},
            {post: 'How are you?', like: 15, id: 2},
            {post: 'Great. Thanks, and you?', like: 65, id: 3},
            {post: 'I am lucky', like: 21, id: 4},
            {post: 'Good luck', like: 48, id: 5},
        ]
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
        ]

    }
}

