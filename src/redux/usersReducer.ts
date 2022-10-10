export type usersType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    photoUrl:string,
    location: {
        city: string,
        country: string
    }
}

type initialStateType = {
    users: usersType[]
}

let initialState: initialStateType = {
    users: [

    ]
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    else return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    else return u
                })
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID,
    }
}

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID,
    }
}

export const setUsersAC=(users:usersType)=>({type: 'SET_USERS', users,})