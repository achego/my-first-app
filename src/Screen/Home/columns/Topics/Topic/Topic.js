import React from 'react'
import cs from './Topic.css'
import ind from '../../../../../index.css'

const Topic = (props) => {
    return (
        <div className={cs.Topic}>
            <div className={cs.display}>
                <div className={cs.icon}></div>
                <div className={cs.text}>
                    <p className={cs.title}>{props.title}</p>
                    <p className={cs.activity}>{props.activity}</p>
                </div>
            </div>
            <p className={ind.p}>{props.description}</p>
        </div>
    )
}

export default Topic
