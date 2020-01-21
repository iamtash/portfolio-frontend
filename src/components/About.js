import React from 'react'
import Avatar from "../media/avatar.png"

const About = () => {
    return (
        <div>
            <div className="container">
                <h1>About Me</h1>
                <img src={Avatar} alt="avatar" className="rounded float-left" style={{width: '25%'}} />
            </div>
        </div>
    )
}

export default About