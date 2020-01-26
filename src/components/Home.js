import React from 'react'
import { Container, Accordion, Card, Image, ListGroup } from 'react-bootstrap'
import pic from '../sprites/julia_museum.png'

const Home = () => {
    const skills = [
        'Ruby', 
        'Rails', 
        'JavaScript', 
        'React.JS', 
        'Redux.JS', 
        'OOP', 
        'SQL', 
        'ORMs', 
        'TDD & BDD', 
        'HTML', 
        'CSS', 
        'Git'
    ]
    
    return (

        <Container style={{marginTop: '20px'}}>
      
            <Image src={pic} rounded style={{width: '65%', marginBottom: '20px'}}/>
            <div>
                <h1>Natasha Chernis</h1>
                <h5 className="font-weight-light">Full-stack web development</h5>
            </div>
            
            <Accordion style={{marginTop: '20px'}}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Skills
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            {skills.map(skill => <ListGroup.Item key={skill}>{skill}</ListGroup.Item>)}
                        </ListGroup>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Education
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item>
                                <b>Flatiron School</b>
                                <br />
                                Full Stack Web Development, Ruby on Rails and JavaScript program
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>The University of Texas at Austin</b>
                                <br />
                                Bachelor of Science, Nutritional Sciences
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        The Photo
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        It's my cousin at the The Contemporary Arts Museum in Houston, TX. And also a representation of how I sometimes feel doing this thing that I love.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
}

export default Home