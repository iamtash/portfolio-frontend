import React, { Component } from 'react'
import { connect } from 'react-redux'
import GuestProjectCard from '../components/GuestProjectCard'
import AdminProjectCard from '../components/AdminProjectCard'

class ProjectContainer extends Component {
    render() {
        const { currentUser, project } = this.props
        return (
            <>
                {currentUser.loggedIn ? <AdminProjectCard {...project} /> : <GuestProjectCard {...project} />}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(ProjectContainer)