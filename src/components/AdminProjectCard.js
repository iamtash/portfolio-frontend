import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../actions/projects'
import ProjectInput from './EditProject'
import CardContent from './CardContent'

class AdminProjectCard extends Component {

    state = {
        editing: false
    }

    handleDelete = id => {
        this.props.deleteProject(id)
    }

    handleEdit = () => {
        this.setState({
            editing: true
        })
    }

    handleUpdate = () => {
        this.setState({
            editing: false
        })
    }

    renderCard = () => {
        const { id } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <CardContent {...this.props} />

                    <button 
                        className="btn btn-secondary float-right"
                        onClick={() => this.handleDelete(id)}
                    >Delete</button>

                    <button 
                        className="btn btn-primary float-right"
                        onClick={() => this.handleEdit(id)}
                    >Edit</button>
                </div>
            </div>
          )
    }

    render() {
      return (
          <>
            {this.state.editing ? <ProjectInput editing={this.props} handleUpdate={this.handleUpdate} /> : this.renderCard()}
          </>
      )
    }

}

export default connect(undefined, { deleteProject })(AdminProjectCard)