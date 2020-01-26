import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../actions/projects'
import EditProject from './EditProject'
import CardContent from './CardContent'
import { ButtonGroup, Button, Card } from 'react-bootstrap'

class AdminProjectCard extends Component {

    state = {
        editing: false
    }

    handleDelete = () => {
        this.props.deleteProject(this.props.id)
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
            <ButtonGroup className="float-right">
                <Button variant="primary" onClick={this.handleEdit}>Edit</Button>
                <Button variant="secondary" onClick={this.handleDelete}>Delete</Button>
            </ButtonGroup>
        </>
    )


    card = () => <><CardContent {...this.props} buttons={this.buttons} /></>

    editor = () => {
        return (
            <>
                <Card>
                    <Card.Body>
                        <EditProject editing={this.props} closeEditor={this.closeEditor} /> 
                    </Card.Body>
                </Card>
                <br />
            </>
        )
    }

    render() {
      return (
            <>
                {this.state.editing ? this.editor() : this.card()}
            </>
      )
    }
}

export default connect(undefined, { deleteProject })(AdminProjectCard)