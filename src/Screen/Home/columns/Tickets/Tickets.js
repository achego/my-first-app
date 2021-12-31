import React from 'react'
import Date from './Date/Date'
import cs from './Tickets.css'
import ind from '../../../../index.css'
import consta from '../../../../dummyData'
import Options from '../../../About/colums/Options/Options'
import Register from '../../../About/colums/Register/Register'

const Tickets = () => {

    const dates = consta.dates.map(
        date => <Date 
                    backgroundColor={date.backgroundColor}
                    color={date.color}
                    day={date.day}
                    noOfSpeakers={date.noOfSpeakers}
                    noOfWorkShop={date.noOfWorkShop}
                    date={date.date}/>
    )

    return (
        <div className={cs.Tickets}>
            <div className={ind.container}>
                <div className={cs.dates}>
                    {dates}
                </div>
                <div className={cs.ticketdetails}>
                    <Options 
                        data={consta.ticketQuestions}
                        color='#FFF022'/>
                    <div className={cs.info}>
                        <h3>Early bird registration now open</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets
