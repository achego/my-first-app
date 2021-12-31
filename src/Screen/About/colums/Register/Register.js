import React from 'react'
import cs from './Register.css'
import ind from '../../../../index.css'
import Button from '../../../../components/Button/Button'

const Register = () => {
    return (
        <div className={cs.Register}>
            <div className={[ind.container, cs.main].join(' ')}>
                <div className={cs.button}>
                    <h2 className={ind.h2}>Reigster today +</h2>
                    <p className={ind.p}>Follow</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={cs.form}>
                    <div>
                        <h3 className={ind.h3}>Join our newsletter</h3>
                        <input type='text' placeholder='Email'/>
                        <Button 
                            className={cs.subscribe}
                            icon='E'
                            text='Subscribe'
                            color='white'
                            backgroundColor='black'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
