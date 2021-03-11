const userReducer = (state, action) => {
    switch (action.type){
        case 'LOGGED_IN':
            return state = {
                ...state,
                userName: action.data.username
            }
        default: 
            return state
    }
}

export const signIn = (username) => {
    return {
        type: "LOGGED_IN",
        data: {
            username
        }
    }
}

export default userReducer;