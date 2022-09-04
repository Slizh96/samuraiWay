import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
// import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";

export type PropsType = {
    state: StateType
}

function App(props: PropsType) {
    return (
        <div className="appWrapper">
            <Header/>
            <Nav friendsBlock={props.state.friendsBlock}/>
            <div className='appWrapperContent'>
                {/*<Route path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}
                <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.messagePage.dialog}
                                                              messageData={props.state.messagePage.message}/>}/>
                <Route path='/profile' render={() => <Profile postData={props.state.profilePage.post}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
