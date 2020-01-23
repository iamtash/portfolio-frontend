import React from 'react'
import { connect } from 'react-redux'
import { likeProject } from '../actions/projects'
import CardContent from './CardContent'

const GuestProjectCard = props => {
    const handleLike = id => {
        props.likeProject(id)
    }

    const button = <button className="btn btn-primary float-right" onClick={() => handleLike(props.id)}>Like</button>

    return (
        <>
            <CardContent {...props} buttons={button} />
            <br />
        </>
    )
}

export default connect(undefined, { likeProject })(GuestProjectCard)

