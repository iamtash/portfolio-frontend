import React from 'react'
import GuestNav from './GuestNav'
import Avatar from "../media/avatar.png"

const About = () => {
    return (
        <div>
            <GuestNav />
            <div className="container">
                <h1>About Me</h1>
                <img src={Avatar} alt="avatar" className="rounded float-left" style={{width: '25%'}} />
            </div>
        </div>
    )
}

export default About