import React from 'react'
import cs from './NavButton.css'

const NavButton = (props) => {

    return(
        <div 
            className={[cs.NavButton, props.className?props.className:null].join(' ')}
            onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default NavButton;