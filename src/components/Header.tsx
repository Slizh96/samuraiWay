import React from "react";
import  s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://assets-global.website-files.com/60abb689ce5c94972a5f808a/6107298ce4b5511f5f772f3f_Telos%20Logo%20Small.png"
                alt=""/>
        </header>
    )
}