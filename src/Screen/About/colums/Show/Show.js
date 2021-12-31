import React from 'react'
import Button from '../../../../components/Button/Button'
import ind from '../../../../index.css'
import cs from './Show.css'

const Show = () => {
    return (
        <article className={[ind.container, cs.Show].join(' ')}>
            <h1 className={ind.h1}>About the event</h1>
            <div>
                <p className={ind.p}>
                Faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                </p>
                <Button 
                    text='Save your seat'
                    backgroundColor='#FF6AF0'/>
            </div>
        </article>
    )
}

export default Show
