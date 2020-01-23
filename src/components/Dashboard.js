import React, { Component } from 'react'
import AdminNav from './AdminNav'
import GuestNav from './GuestNav'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() { 
        const { currentUser } = this.props   
        return(
            <>
                <div className="jumbotron text-center" style={{marginBottom: 0}}>
                    <h1>Natasha Chernis</h1>
                    <p>Full-stack web developer</p> 
                </div>
                {currentUser.loggedIn ? <AdminNav /> : <GuestNav />}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Dashboard)