import React from 'react';
import './index.css';
import {addMessage, addPost, state, StateType, subscribe, updateMessageText, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updatePostText={updatePostText}
                addMessage={addMessage}
                updateMessageText={updateMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);
