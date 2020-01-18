import axios from "axios"

const url = "http://localhost:3001/sessions"

export const login = ({email, password}) => {
    return dispatch => {
        dispatch({type: 'LOGGING_IN'})
        axios.post(url, {
            user: { email, password }
        }, {withCredentials: true }
        ).then(resp => {
            if (resp.data.logged_in) {
                const { id, email } = resp.data.user
                dispatch({
                    type: 'USER_LOGIN', 
                    user: { id, email }
                }) 
            }
        }
        ).catch(error => console.log('login error', error))
    }
}