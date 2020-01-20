import React from 'react'
import Project from './Project'

const Projects = ({projects}) => {
    const renderProjects = projects => {
        return (
            <div className="container">
                {projects.map(project => <Project key={project.id} {...project} />)}
            </div>
        )

    }

    return (
        <div className="container">
            <h1>Projects</h1>
            {projects.requesting ? 'Loading...' : null}
            {renderProjects(projects.projects)}
        </div>
    )
}

export default Projects