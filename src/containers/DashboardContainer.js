import React, { Component } from 'react'
import AdminDashboard from '../components/AdminDashboard'
import GuestDashboard from '../components/GuestDashboard'
import { connect } from 'react-redux'

class DashboardContainer extends Component {
    render() { 
        const { currentUser, projects } = this.props   
        return(
            <div>
                Dashboard Container
                {currentUser.loggedIn ? <AdminDashboard projects={projects} /> : <GuestDashboard projects={projects} />}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        projects: state.projects
    }
}

export default connect(mapStateToProps)(DashboardContainer)


// links to add projects or blogs