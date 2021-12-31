import React from 'react'
import cs from './Option.css'
import ind from '../../../../../index.css'

const Option = (props) => {

    let color = '#FF6AF0'
    if (props.color) {
        color = props.color
    }

    return (
        <div 
            className={[cs.Option, props.active?cs.showMore:null].join(' ')}
            onClick={() => props.setActive(props.id)}
            style={{
                border: '7px solid ' + color,
                backgroundColor: props.active?color:'transparent'
            }}>
            <div className={cs.details}>
                <h2 
                    className={ind.bold_text}
                    style={{
                        color: color
                    }}>{props.title}</h2>
                <div style={{
                    opacity:props.active?'0':'1',
                    backgroundColor:color}}>+</div>
            </div>
            <p className={[cs.desc, ind.small_p].join(' ')}>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.</p>
        </div>
    )
}

export default Option
