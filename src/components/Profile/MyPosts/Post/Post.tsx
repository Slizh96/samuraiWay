import React from "react";
import s from './Post.module.css'

type PostPropsType={
    post: string
    like:number
    id:number
}

export const Post = (props: PostPropsType) => {
    return (
        <div>

            <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://lapkins.ru/upload/iblock/4a8/4a86cff4ab81d72fe1dea71242323a8c.jpg" alt=""/>
                    {props.post}
                </div>
                <div>
                    <span>like: {props.like}</span>
                </div>
            </div>
        </div>
    )
}