import React, { Component } from 'react'
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
        this.props.login({email, password})
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="float-right">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        className="form-control"
                        name="email" 
                        placeholder="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <input 
                        type="password" 
                        className="form-control"
                        name="password" 
                        placeholder="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                
                <button type="submit" className="btn btn-secondary">Login</button>
                </form>
            </div>
        )
    }
}

export default connect(undefined, { login })(Login)