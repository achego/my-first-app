import React from 'react'
import Button from '../../../../../components/Button/Button'
import ind from '../../../../../index.css'
import cs from './Date.css'
import PropTypes from 'prop-types'


const Date = (props) => {
    return (
        <div 
            className={cs.Date}
            style={{
                backgroundColor:props.backgroundColor?props.backgroundColor:'yellow',
                color:props.color?props.color:'black'}}>
            <p className={ind.p}>{props.date}</p>
            <h2 className={ind.h2}>{props.day}</h2>
            <p className={ind.p}>{props.noOfSpeakers} Speakers</p>
            <p className={ind.p}>{props.noOfWorkShop} Workshop</p>
            <Button 
                backgroundColor='black'
                color='white'
                text='View Schedule'/>
        </div>
    )
}

Date.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    date: PropTypes.string,
    day: PropTypes.string,
    noOfSpeakers: PropTypes.string,
    noOfWorkShop: PropTypes.string,
}

export default Date
