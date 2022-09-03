import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

export type DialogsItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogsItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
