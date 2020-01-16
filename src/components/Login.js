import React, { Component } from 'react'
import axios from 'axios'
import { login } from '../actions/login'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        email: "",
        password: "",
        loginErrors: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { email, password } = this.state
        axios.post("http://localhost:3001/sessions", {
            user: { email, password }
        }, { withCredentials: true }
        ).then(response => {
            this.clientLogin(response.data)
        }
        ).catch(error => console.log('login error', error))
    }

    clientLogin = data => {
        if (data.logged_in) {
            const { id, email } = data.user
            this.props.login({ id, email })
        } else {
            this.setState({
                email: "",
                password: ""
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                
                <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default connect(undefined, { login })(Login)