import React, { Component } from 'react'
import ModalForm from '../components/ModalForm'
import { Button } from 'react-bootstrap'

class ModalFormContainer extends Component {
    state = {
        showModal: false
    }

    handleShow = () => {
        this.setState({
            showModal: true
        })
    }

    handleHide = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                <Button variant="primary" block onClick={this.handleShow}>
                    CREATE A NEW PROJECT
                </Button>
        
                <ModalForm
                    show={this.state.showModal}
                    onHide={this.handleHide}
                />
            </div>
            
        )
    }
}

export default ModalFormContainer