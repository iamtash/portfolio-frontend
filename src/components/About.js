import React from 'react'
import avatar from "../sprites/avatar.png"
import { Container, Image } from 'react-bootstrap'

const About = () => {
    return (
        <Container style={{marginTop: '20px'}}>
            <h1>About Me</h1>
            <Image src={avatar} rounded style={{width: '25%'}} />
        </Container>
    )
}

export default About