export default function loginReducer(
    state = {
        loggedIn: null,
        id: null,
        email: "",
        authenticating: false
    }, action) {
        switch (action.type) {
            case 'LOGGING_IN':
                return {
                    ...state,
                    loggedIn: state.loggedIn,
                    id: state.id,
                    email: state.email,
                    authenticating: true
                }
            case 'USER_LOGIN':
                console.log('persisting logged in user to store')
                return {
                    ...state,
                    loggedIn: true,
                    id: action.user.id,
                    email: action.user.email,
                    authenticating: false
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
