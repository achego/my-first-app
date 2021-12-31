import React from 'react'
import Sponsor from './Sponsor/Sponsor'
import cs from './Sponsors.css'
import ind from '../../../../index.css'

const Sponsors = () => {

    let sponsors = []

    for (let index = 0; index < 8; index++) {
        sponsors.push(<Sponsor key={index}/>)
    }

    return (
        <section className={[cs.Sponsors, ind.container].join(' ')}>
            <h2 className={ind.h2}>{'Sponsors & partners'}</h2>
            <div>
                {sponsors}
            </div>
        </section>
    )
}

export default Sponsors
