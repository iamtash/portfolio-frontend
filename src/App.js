import React, { Component } from 'react'
import NavContainer from './containers/NavContainer'
import Home from './components/Home'
import ProjectsContainer from './containers/ProjectsContainer'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { getProjects } from './actions/projects'

class App extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    return (
      <Router>
          <div className="app">
            <NavContainer />
          </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects">
          <ProjectsContainer />
        </Route> 
        
      </Router>

    );
  }
}

export default connect(undefined, { getProjects })(App);
