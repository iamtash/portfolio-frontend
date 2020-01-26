import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editProject } from '../actions/projects'
import ProjectForm from './ProjectForm'
import { Button, ButtonGroup } from 'react-bootstrap'

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

                <ButtonGroup>
                    <Button variant="primary" onClick={this.handleSubmit}>Update</Button>
                    <Button variant="secondary" onClick={this.props.closeEditor}>Cancel</Button>
                </ButtonGroup>
                
            </div>            
        )
    }
}

export default connect(undefined, { editProject })(EditProject)