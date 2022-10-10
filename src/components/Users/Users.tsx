import React from "react";
import s from './Users.module.css'
import {usersType} from "../../redux/usersReducer";

type UsersPropsType = {
    users: usersType[],
    unfollow:(userId:number)=>void,
    follow:(userId:number)=>void,
    setUsers:(users:usersType[])=>void
}

export const Users = (props: UsersPropsType) => {
   if (props.users.length===0){
       props.setUsers([{
           id: 1,
           followed: false,
           fullName: 'Olga',
           status: 'Hello. This is my first status',
           photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
           location: {city: 'Minsk', country: 'Belarus'}
       },
           {
               id: 2,
               followed: true,
               fullName: 'Ben',
               status: 'it is great',
               photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
               location: {city: 'Brest', country: 'Belarus'}
           },
           {
               id: 3,
               followed: false,
               fullName: 'Tom',
               status: 'i like it',
               photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
               location: {city: 'London', country: 'The United Kingdom'}
           },])
   }


    return (
        <div className={s.users}>
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt=''/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    )
}