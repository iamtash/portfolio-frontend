import React from 'react'
import AdminDashboard from '../components/AdminDashboard'
import GuestDashboard from '../components/GuestDashboard'
import { connect } from 'react-redux'

const DashboardContainer = ({currentUser}) => {
    return(
        <div>
            Dashboard Container
            {currentUser.loggedIn? <AdminDashboard /> : <GuestDashboard />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(DashboardContainer)


// links to add projects or blogs