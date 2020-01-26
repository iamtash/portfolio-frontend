import React, { useState } from 'react'
import { connect } from 'react-redux'
import { likeProject } from '../actions/projects'
import CardContent from './CardContent'

const GuestProjectCard = props => {
    const [disabled, setDisabled] = useState(false)

    const handleLike = () => {
        setDisabled(true)
        props.likeProject(props.id)
    }

    const button = (
        <button 
            className="btn btn-primary float-right" 
            onClick={handleLike}
            disabled={disabled} >
            Like
        </button>
    )

    return (
        <>
            <CardContent {...props} buttons={button} />
        </>
    )
}

export default connect(undefined, { likeProject })(GuestProjectCard)