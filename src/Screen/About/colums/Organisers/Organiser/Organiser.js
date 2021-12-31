import React from 'react'
import cs from './Organiser.css'
import PropTypes from 'prop-types'
import ind from '../../../../../index.css'

const Organiser = (props) => {
    return (
        <div className={cs.Organiser}>
            <div>{props.image}</div>
            <p className={cs.position}>{props.position}</p>
            <p className={[cs.name].join(' ')}>{props.name}</p>
        </div>
    )
}

Organiser.propTypes = {
    image: PropTypes.string,
    position: PropTypes.string,
    name: PropTypes.string,
}

export default Organiser
