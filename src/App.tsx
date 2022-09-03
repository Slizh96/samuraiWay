import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
// import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageItemPropsType} from "./components/Dialogs/Message/Message";
import {PostDataType} from "./components/Profile/MyPosts/MyPosts";

export type PropsType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessageItemPropsType>
    postData: Array<PostDataType>
}

function App(props: PropsType) {
    return (
        <BrowserRouter >
            <div className="appWrapper">
                <Header/>
                <Nav/>
                <div className='appWrapperContent'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={()=><Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route path='/profile' render={()=><Profile postData={props.postData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
