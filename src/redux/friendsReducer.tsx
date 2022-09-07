import {FriendsBlockType} from "./store";

let initialState:FriendsBlockType[]=[
    {src: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', name: 'Roni'},
    {src: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', name: 'Bin'},
    {src: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', name: 'Tom'},
]

export const friendsReducer = (state=initialState, action: any) => {
    return state
}