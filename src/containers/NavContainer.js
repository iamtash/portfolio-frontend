import React from 'react'
import AdminNav from '../components/AdminNav'
import GuestNav from '../components/GuestNav'
import { connect } from 'react-redux'

const NavContainer = ({ currentUser }) => {  
    return (
        <>
            {currentUser.loggedIn ? <AdminNav /> : <GuestNav />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(NavContainer)