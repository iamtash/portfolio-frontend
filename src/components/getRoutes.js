import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import ProjectInput from './ProjectInput'
import BlogInput from './BlogInput'
import About from './About'
import ProjectsContainer from '../containers/ProjectsContainer'
import GuestNav from './GuestNav'

export const getRoutes = (currentUser, projects) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route 
                    exact path="/new-project" 
                    render={() => currentUser.loggedIn ? <ProjectInput /> : <Home />} 
                />
                <Route 
                    exact path="/new-blog" 
                    render={() => currentUser.loggedIn ? <BlogInput /> : <Home />}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects">
                    {currentUser.loggedIn ? null : <GuestNav />}
                    <ProjectsContainer projects={projects} />
                </Route>
            </Switch>
        </Router>
    )
}

