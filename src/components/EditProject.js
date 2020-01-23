import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editProject } from '../actions/projects'
import ProjectForm from './ProjectForm'

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

    handleSubmit = () => {
        this.props.editProject(this.state)
        this.props.closeEditor()
    }

    render() {
        return (
            <div className="container">      
                <h4>Edit Project</h4>
                <ProjectForm {...this.state} handleChange={this.handleChange} />
                
                <button className="btn btn-primary" onClick={this.handleSubmit}>Update</button>
                <button className="btn btn-secondary" onClick={this.props.closeEditor}>Cancel</button>
                
            </div>            
        )
    }
}

export default connect(undefined, { editProject })(EditProject)