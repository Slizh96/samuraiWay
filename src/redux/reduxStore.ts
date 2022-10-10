import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {friendsReducer} from "./friendsReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsBlock: friendsReducer,
    usersPage: usersReducer,
})

export let store = createStore(reducers);