import React from 'react'
import cs from './NavItems.css'

const NavItems = (props) => {
    return (
        <ul className={cs.NavItems}>
            <li className={cs.active}>about</li>
            <li>Home</li>
            <li>landing</li>
            <li>event</li>
            <li>speakers</li>
            <li>schedule</li>
            <li>pricing</li>
            <li>blog</li>
            <li>contact</li>
        </ul>
    )
}

export default NavItems