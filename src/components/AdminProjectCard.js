import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../actions/projects'
import EditProject from './EditProject'
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

    closeEditor = () => {
        this.setState({
            editing: false
        })
    }

    renderCard = () => {
        const { id } = this.props
        return (
            <>
                <CardContent {...this.props} />
                <button 
                    className="btn btn-secondary float-right"
                    onClick={() => this.handleDelete(id)}
                >Delete</button>
                <button 
                    className="btn btn-primary float-right"
                    onClick={() => this.handleEdit(id)}
                >Edit</button>
            </>
        )
    }

    render() {
      return (
            <div className="card">
                <div className="card-body">
                    {this.state.editing ? <EditProject editing={this.props} closeEditor={this.closeEditor} /> : this.renderCard()}
                </div>
            </div>
      )
    }

}

export default connect(undefined, { deleteProject })(AdminProjectCard)