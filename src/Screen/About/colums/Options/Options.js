import React, { useState } from 'react'
import cs from './Options.css'
import ind from '../../../../index.css'
import Option from './Option/Option'


const Options = (props) => {

    const [active, setactive] = useState(1)

    const setActive = (id) => {
        setactive(id)
    }

    const options = props.data.map(opti => {
    return <Option 
        key={opti.id}
        id={opti.id}
        title={opti.title}
        active={active===opti.id}
        setActive={setActive}
        color={props.color}/>
    })

    

    return (
        <div className={[ind.container, cs.Options].join(' ')}>
            <div>
                {options}
            </div>
        </div>
    )
}

export default Options
