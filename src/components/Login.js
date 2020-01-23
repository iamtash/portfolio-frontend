import React, { Component } from 'react'
import { login } from '../actions/login'
import { connect } from 'react-redux'
import { Form, FormControl, Button } from 'react-bootstrap'

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
            <Form inline onSubmit={this.handleSubmit}>
                <FormControl 
                    type="email" 
                    className="mr-sm-2"
                    name="email" 
                    placeholder="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />

                <FormControl
                    type="password" 
                    className="mr-sm-2"
                    name="password" 
                    placeholder="password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                />
                
                <Button variant="outline-info">Login</Button>
            </Form>
        )
    }
}

export default connect(undefined, { login })(Login)