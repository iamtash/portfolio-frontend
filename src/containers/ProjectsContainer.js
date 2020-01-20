import React, { Component } from 'react'
import { connect } from 'react-redux'
import Projects from '../components/Projects'
import ProjectInput from '../components/ProjectInput'

class ProjectsContainer extends Component {

    render() {
        const { projects, currentUser } = this.props
        return(
            <div className="container">
                Projects Container
                {currentUser.loggedIn ? <ProjectInput /> : null}
                <Projects projects={projects} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(ProjectsContainer)