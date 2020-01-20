import React from 'react'

const Project = ({title, githubUrl, demoUrl, description}) => {

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <a href={githubUrl} className="card-link">Github</a>
                <a href={demoUrl} className="card-link">Demo</a>
            </div>
        </div>
    )
}

export default Project