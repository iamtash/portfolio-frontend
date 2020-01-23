import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeProject } from '../actions/projects'
import CardContent from './CardContent'

class GuestProjectCard extends Component {
    handleLike = id => {
        this.props.likeProject(id)
    }

    render() {
        const { id, likes } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <CardContent {...this.props} />

                    <button 
                        type="button" 
                        className="btn btn-primary float-right"
                        onClick={() => this.handleLike(id)}
                    >Like</button>
                     <p className="card-text small">Likes: {likes}</p>
                </div>
            </div>
        )
    }

}

export default connect(undefined, { likeProject })(GuestProjectCard)

