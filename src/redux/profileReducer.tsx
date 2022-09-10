import {PostDataType} from "../components/Profile/MyPosts/MyPosts";
import {ProfilePageType} from "./store";

let initialState:ProfilePageType={
        post: [
            {post: 'Hello. This is my first post', like: 25, id: 1},
            {post: 'How are you?', like: 15, id: 2},
            {post: 'Great. Thanks, and you?', like: 65, id: 3},
            {post: 'I am lucky', like: 21, id: 4},
            {post: 'Good luck', like: 48, id: 5},
        ],
        newPostText: ''
    }

export const profileReducer = (state=initialState, action: any) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostDataType = {
                post: state.newPostText,
                like: 25,
                id: 1
            };
            state.post.push(newPost)
            state.newPostText = '';
            return state;
        case 'UPDATE-POST-TEXT':
            state.newPostText = action.newPostText;
            return state;
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newPostText: text
    }
}