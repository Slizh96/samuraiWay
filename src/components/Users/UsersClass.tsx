import React from "react";
import s from './Users.module.css'
import axios from "axios";
import avatar from '../../assets/images/avatar.jpg'

// type UsersPropsType = {
//     users: usersType[],
//     unfollow:(userId:number)=>void,
//     follow:(userId:number)=>void,
//     setUsers:(users:usersType[])=>void
// }

class Users extends React.Component<any, any>{

    getUsers=()=>{
        if (this.props.users.length===0){

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response=>{
                    // debugger;
                    this.props.setUsers(response.data.items)
                });


        }
    };

    render(){
        return (
            <div className={s.users}>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.users.map((u: { id: React.Key | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : avatar} alt='avatar'/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>
                )}
            </div>
        )
    }
}

export default Users