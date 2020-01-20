import React from 'react'
import Login from './Login'
import ProjectsContainer from '../containers/ProjectsContainer'
import GuestNav from './GuestNav'

const GuestDashboard = ({projects}) => {
    return (    
        <div>
            Guest Dashboard
            {/* <Login /> */}
            <GuestNav />
            <ProjectsContainer projects={projects} />
        </div>
    )
}

export default GuestDashboard