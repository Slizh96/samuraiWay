import {PostDataType} from "../components/Profile/MyPosts/MyPosts";


export const profileReducer = (state: any, action: any) => {

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