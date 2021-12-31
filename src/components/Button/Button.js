import React from 'react'
import cs from './Button.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    const btnClass = [cs.Button]
    if(props.className){
        btnClass.push(props.className)
    }
    return (
        <button className={btnClass.join(' ')} 
                style={{
                    backgroundColor: props.backgroundColor,
                    color: props.color,
                    border: props.border,
                    }}>
            {props.text}<span>{props.icon?props.icon:'>'}</span>
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    
}

export default Button
