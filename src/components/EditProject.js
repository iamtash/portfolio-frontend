import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editProject } from '../actions/projects'

class EditProject extends Component {
    constructor(props) {
        super(props)
        const { id, title, githubUrl, demoUrl, description } = props.editing
        this.state = { id, title, githubUrl, demoUrl, description }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.editProject(this.state)
        this.props.handleUpdate()
    }

    render() {
        return (
        <div className="container" style={{marginTop: '20px'}}>
            
            <h4>Edit Project</h4>
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
                    value={this.state.githubUrl}
                    placeholder="Github URL"
                    required
                />
                <input 
                    className="form-control"
                    onChange={this.handleChange}
                    type="text"
                    name="demoUrl"
                    value={this.state.demoUrl}
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
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-secondary" onClick={this.props.handleUpdate}>Cancel</button>
            </form>
        </div>
            
        )
    }
}

export default connect(undefined, { editProject })(EditProject)