import React from 'react'
import cs from './Virtual.css'
import ind from '../../../../index.css'
import Button from '../../../../components/Button/Button'

const Virtual = () => {
    return (
        <section className={[cs.Virtual, ind.container].join(' ')}>
           <div className={cs.container}>
                <div className={cs.text}>
                    <h2 className={ind.h3}>A virtual web developer conference</h2>
                    <Button 
                        className={cs.v_button}
                        text='View Schedule'
                        border='1px solid #FFF022'
                        />
                </div>
                <div className={cs.image}></div>
           </div>
        </section>
    )
}

export default Virtual
