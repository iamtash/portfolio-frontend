import React, { PureComponent } from 'react'
import { login } from '../actions/login'
import { connect } from 'react-redux'
import { Form, FormControl, Button } from 'react-bootstrap'

class Login extends PureComponent {
    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const { email, password } = this.state
        this.props.login({email, password})
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <Form inline>
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
                
                <Button variant="outline-info" onClick={this.handleSubmit}>Login</Button>
            </Form>
        )
    }
}

export default connect(undefined, { login })(Login)