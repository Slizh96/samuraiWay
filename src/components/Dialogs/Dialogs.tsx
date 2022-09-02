import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}>Olya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}>Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}>Valentina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.active}>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={s.active}>Max</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' activeClassName={s.active}>Tim</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>What's new?</div>
                <div className={s.message}>I'm fine</div>
                <div className={s.message}>I'm lucky</div>
                <div className={s.message}>Great</div>
            </div>
        </div>
    )
}