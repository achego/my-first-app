import React from 'react'
import cs from './DiviCon.css'
import ind from '../../../../index.css'

const DiviCon = () => {
    return (
        <section className={cs.DiviCon}>
            <h1 className={ind.h1}>
                divi con <span className={ind.h2}>summer 2021</span>
            </h1>
            <div className={cs.registerN}>
                <h3 className={ind.h3}>Register now</h3>
                <div>+</div>
            </div>
            <p className={ind.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
        </section>
    )
}

export default DiviCon
