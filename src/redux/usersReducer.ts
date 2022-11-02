export type usersType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos:{
        small:string,
        large:string
    },
    // location: {
    //     city: string,
    //     country: string
    // }
}

type initialStateType = {
    users: usersType[],
    pageSize:number,
    totalUsersCount: number,
    currentPage:number,
}

let initialState: initialStateType = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
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
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount }

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

export const setCurrentPageAC=(currentPage:number)=>({type: 'SET_CURRENT_PAGE', currentPage})

export const setTotalUsersCountAC=(totalCount:number)=>({type: 'SET_TOTAL_USERS_COUNT', totalCount})