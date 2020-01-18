import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import humps from 'humps'

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
        const { title, githubUrl, demoUrl, description } = this.state
        axios.post("http://localhost:3001/projects", humps.decamelizeKeys({
            project: { 
                title, 
                githubUrl, 
                demoUrl, 
                description 
            }
        }), 
        ).then(response => console.log('post project resp', response))
         .catch(error => console.log('post project error', error))
    }

    render() {
        return (<div >
            <h1>New Project</h1>
            <form onSubmit={this.handleSubmit} className="form-group" style={{width: '50%'}}>
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

export default ProjectInput