import React from 'react'

const ProjectForm = ({ title, githubUrl, demoUrl, description, handleChange }) => {
    return (
        <form className="form-group" style={{marginBottom: 0}}>
            <input 
                className="form-control"
                onChange={handleChange}
                type="text"
                name="title"
                value={title}
                placeholder="Title"
                required
            />
            <input 
                className="form-control"
                onChange={handleChange}
                type="text"
                name="githubUrl"
                value={githubUrl}
                placeholder="Github URL"
                required
            />
            <input 
                className="form-control"
                onChange={handleChange}
                type="text"
                name="demoUrl"
                value={demoUrl}
                placeholder="Demo URL"
                required
            />
            <textarea
                className="form-control"
                onChange={handleChange}
                name="description"
                value={description}
                placeholder="Description"
                required
            />
        </form>
    )
}

export default ProjectForm