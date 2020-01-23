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
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Project
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProjectForm {...this.state} handleChange={this.handleChange} />
                    {/* <form className="form-group">
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
                            required
                        />

                        <textarea
                            className="form-control"
                            onChange={this.handleChange}
                            name="description"
                            value={this.state.description}
                            placeholder="Description"
                            required
                        />
                    </form> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default connect(undefined, { addProject })(ModalForm)