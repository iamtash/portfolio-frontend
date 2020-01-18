import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
    return (    
        <div>
            Admin Dashboard
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/new-project">New Project</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/new-blog">New Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminDashboard