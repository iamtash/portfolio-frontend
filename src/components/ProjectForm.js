import React from 'react'
import { Form } from 'react-bootstrap'

const ProjectForm = ({ title, githubUrl, demoUrl, description, handleChange }) => {
    return (
        <Form style={{marginBottom: 0}}>
            <Form.Group>
                <Form.Control 
                    onChange={handleChange}
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Title"
                    required
                    style={{marginBottom: '10px'}}
                />
                <Form.Control 
                    onChange={handleChange}
                    type="text"
                    name="githubUrl"
                    value={githubUrl}
                    placeholder="Github URL"
                    required
                    style={{marginBottom: '10px'}}
                />
                <Form.Control 
                    onChange={handleChange}
                    type="text"
                    name="demoUrl"
                    value={demoUrl}
                    placeholder="Demo URL"
                    required
                    style={{marginBottom: '10px'}}
                />
                <Form.Control
                    as="textarea"
                    onChange={handleChange}
                    name="description"
                    value={description}
                    placeholder="Description"
                    rows="4"
                    required
                />
            </Form.Group>
        </Form>
    )
}

export default ProjectForm