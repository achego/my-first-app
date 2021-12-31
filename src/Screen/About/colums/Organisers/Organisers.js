import React from 'react'
import cs from './Organisers.css'
import ind from '../../../../index.css'
import Organiser from './Organiser/Organiser'
import consta from '../../../../dummyData'

const Organisers = () => {

    const organisers = consta.dum.map(
        organiser => <Organiser
                        key={organiser.id}
                        name={organiser.name}
                        position={organiser.position} />)

    return (
        <div className={[cs.Organisers, ind.container].join(' ')}>
            <h2 className={[cs.title, ind.h2].join(' ')}>Event Organisers</h2>
            <div className={cs.organiser}>
                {organisers}
            </div>
        </div>
    )
}

export default Organisers
