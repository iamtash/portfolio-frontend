import React from 'react'
import { NavLink } from 'react-router-dom';
import Login from './Login'

const GuestNav = () => {
    return (
        <div className="row">
            <div className="col-sm-7">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-sm-5">
                <Login />
            </div>
        </div>
    )
}

export default GuestNav