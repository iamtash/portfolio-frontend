import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../actions/projects'
import EditProject from './EditProject'
import CardContent from './CardContent'
import { Card } from 'react-bootstrap'

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

    buttons = (
        <>
            <button 
                className="btn btn-secondary float-right"
                onClick={() => this.handleDelete(this.props.id)}
            >Delete</button>
            <button 
                className="btn btn-primary float-right"
                onClick={() => this.handleEdit(this.props.id)}
            >Edit</button>
        </>
    )


    card = (
        <>
            <CardContent {...this.props} buttons={this.buttons} />
            <br />
        </>
    )

    editor = (
        <>
            <Card>
                <Card.Body>
                    <EditProject editing={this.props} closeEditor={this.closeEditor} /> 
                </Card.Body>
            </Card>
            <br />
        </>
    )

    render() {
      return (
            <>
                {this.state.editing ? this.editor : this.card}
            </>
      )
    }
}

export default connect(undefined, { deleteProject })(AdminProjectCard)