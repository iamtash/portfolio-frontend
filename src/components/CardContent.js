import React from 'react'

const CardContent = ({title, description, githubUrl, demoUrl}) => {
    return (
        <>
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <a href={githubUrl} className="card-link">Github</a>
            <a href={demoUrl} className="card-link">Demo</a>
        </>
    )
}

export default CardContent