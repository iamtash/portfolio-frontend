import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { addProject } from '../actions/projects'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import ProjectForm from './ProjectForm'

class ModalForm extends Component {
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

    handleSubmit = () => {
        this.props.addProject(this.state)
        this.props.onHide()
        this.setState({
            title: "",
            githubUrl: "",
            demoUrl: "",
            description: ""
        })
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>
                    New Project
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProjectForm {...this.state} handleChange={this.handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default connect(undefined, { addProject })(ModalForm)