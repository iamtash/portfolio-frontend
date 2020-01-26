import React from 'react'
import { Card } from 'react-bootstrap'

const CardContent = ({ title, description, githubUrl, demoUrl, likes, buttons }) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title><h4>{title}</h4></Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={githubUrl}>Github</Card.Link>
                    <Card.Link href={demoUrl}>Demo</Card.Link>
                    {buttons}
                        <Card.Text className="small">Likes: {likes}</Card.Text>
                </Card.Footer>
            </Card>
            <br />
        </>
    )
}

export default CardContent