import React, { Component } from 'react'
import { getRoutes } from './components/getRoutes'
import { connect } from 'react-redux'
import { getProjects } from './actions/projects'

class App extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const { currentUser, projects } = this.props
    return (
      <div className="app">
        {getRoutes(currentUser, projects)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    projects: state.projects
  }
}

export default connect(mapStateToProps, { getProjects })(App);
