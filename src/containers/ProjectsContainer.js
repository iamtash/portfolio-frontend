import React, { Component } from 'react'
import { connect } from 'react-redux'
import Projects from '../components/Projects'
import ModalFormContainer from './ModalFormContainer'

class ProjectsContainer extends Component {

    render() {
        const { projects, currentUser } = this.props
        return(
            <div className="container" style={{marginTop: '20px'}}>
                {currentUser.loggedIn ? <ModalFormContainer /> : null}
                <Projects projects={projects} />
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

export default connect(mapStateToProps)(ProjectsContainer)