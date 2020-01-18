import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import DashboardContainer from '../containers/DashboardContainer'
import ProjectInput from './ProjectInput'
import BlogInput from './BlogInput'

export const getRoutes = currentUser => {
    return (
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route 
            exact path="/new-project" 
            render={() => currentUser.loggedIn ? <ProjectInput /> : <Home />} 
          />
          <Route 
            exact path="/new-blog" 
            render={() => currentUser.loggedIn ? <BlogInput /> : <Home />}
          />
        </Switch>
        </Router>
    )
}

