import React from 'react'
import { NavLink } from 'react-router-dom';
import ProjectsContainer from '../containers/ProjectsContainer'

const AdminDashboard = ({projects}) => {
    return (    
        <div>
            Admin Dashboard
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/new-project">New Project</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/new-blog">New Blog</NavLink>
                    </li>
                </ul>
            </nav>
            <ProjectsContainer projects={projects} />
        </div>
    )
}

export default AdminDashboard