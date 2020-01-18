import React, { Component } from 'react'
import { getRoutes } from './components/getRoutes'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="app">
        {getRoutes(this.props.currentUser)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App);
