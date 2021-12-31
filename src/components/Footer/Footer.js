import React from 'react'
import cs from './Footer.css'
import ind from '../../index.css'

const Footer = () => {
    return (
        <div className={cs.Footer}>
            <div className={ind.container}>
                <div>
                    <p>Designed by <strong>Achego Tamunobelema</strong> | Powered by <strong>WordPress</strong></p>
                </div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
