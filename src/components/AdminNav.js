import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

const AdminNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </Nav>
       </Navbar>
    )
}

export default AdminNav
