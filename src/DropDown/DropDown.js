import React from 'react'
import NavItems from '../components/NavBar/NavItems/NavItems'
import cs from './DropDown.css'

const DropDown = (props) => {

    const dClass = [cs.container]

    if (props.showDropDown===1){
        dClass.push(cs.reduce)
    }
    if (props.showDropDown){
        dClass.push(cs.reduce)
    }

    return (
        <div className={[cs.DropDown, props.className?props.className:null].join(' ')}>
            <div></div>
            <div className={dClass.join(' ')}>
                <NavItems active={false}/>
            </div>
        </div>
    )
}

export default DropDown