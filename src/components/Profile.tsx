import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://sites.google.com/site/prirodanaha/_/rsrc/1468741750018/home/%D0%96%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg"
                    alt=""/>
            </div>
            <div>
                <img src="https://i.doska.by/images/2022-01-14/6273/UX8OHklg/animals-dogs-newfoundland-1-1.800.jpg"
                     alt="" className={s.logo}/>
                <span>I'm beautiful dog. <br/> My name is Nju. <br/> I live in minsk. <br/>I'm 10 y.o.</span>
            </div>
            <div>
                <h3>My posts</h3>

            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
                <div className={s.item}>post 3</div>
                <div className={s.item}>post 4</div>
                <div className={s.item}>post 5</div>
            </div>
            </div>
        </div>
    )
}