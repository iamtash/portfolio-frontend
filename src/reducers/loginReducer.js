export default function loginReducer(
    state = {
        loggedIn: null,
        id: null,
        email: ""
    }, action) {
        switch (action.type) {
            case 'USER_LOGIN':
                console.log('logging user in', {
                    ...state,
                    loggedIn: true,
                    id: action.user.id,
                    email: action.user.email
                })
                return {
                    ...state,
                    loggedIn: true,
                    id: action.user.id,
                    email: action.user.email
                }
            case 'USER_LOGOUT':
                return {
                    ...state,
                    loggedIn: false,
                    id: null,
                    email: ""
                }
            default:
                return state
        }
}
