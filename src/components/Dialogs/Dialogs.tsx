import React from "react";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
                <div className={s.dialog}>
                    Valentina
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Max
                </div>
                <div className={s.dialog}>
                    Tim
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