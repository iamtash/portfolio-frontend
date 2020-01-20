import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../actions/projects'

class ProjectInput extends Component {
    state = {
        title: "",
        githubUrl: "",
        demoUrl: "",
        description: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.addProject(this.state)
        this.setState({
            title: "",
            githubUrl: "",
            demoUrl: "",
            description: ""
        })
    }

    render() {
        return (<div className="container">
            <h1>New Project</h1>
            <form onSubmit={this.handleSubmit} className="form-group">
                <input 
                    className="form-control"
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="Title"
                    required
                />
                <input 
                    className="form-control"
                    onChange={this.handleChange}
                    type="text"
                    name="githubUrl"
                    value={this.state.githubURL}
                    placeholder="Github URL"
                    required
                />
                <input 
                    className="form-control"
                    onChange={this.handleChange}
                    type="text"
                    name="demoUrl"
                    value={this.state.demoURL}
                    placeholder="Demo URL"
                />

                <textarea
                    className="form-control"
                    onChange={this.handleChange}
                    name="description"
                    value={this.state.description}
                    placeholder="Description"
                    required
                />
                <button className="btn btn-secondary">Submit</button>
            </form>
        </div>
            
        )
    }
}

export default connect(undefined, { addProject })(ProjectInput)