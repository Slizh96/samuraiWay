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

class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                // debugger;
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    } //метод реакт компонент, который делает запрос. компонента монтируется на страничку 1 раз

    //метод как стрелочная ф-ция для сохранения контекста вызова. метод=ф-ция, только в классовой компоненте
    onPageChanged = (pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                // debugger;
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize); //округл до целого числа
        let pages: Array<number> = [];
        for (let i: number = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.users}>
                <div>
                    {pages.map(p => {
                        return (
                            <span className={this.props.currentPage === p ? s.selectedPage : ''}
                            onClick={(e)=>this.onPageChanged(p)}
                            >{p}</span>
                        )
                    })}
                </div>
                {this.props.users.map((u: { id: React.Key | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : avatar} alt='avatar'/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
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