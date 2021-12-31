import React from 'react'
import Layout from '../../components/Layout/Layout'
import consta from '../../dummyData'
import Desc from './colums/Desc/Desc'
import Options from './colums/Options/Options'
import Organisers from './colums/Organisers/Organisers'
import Register from './colums/Register/Register'
import Show from './colums/Show/Show'
import Sponsors from './colums/Sponsors/Sponsors'
import Virtual from './colums/Virtual/Virtual'

const About = () => {
    return (
        <Layout navTitle={'About'}>     
            <Show />
            <Virtual />
            <Desc />
            <Organisers />
            <Options data={consta.option}/>
            <Sponsors />
            <Register />
        </Layout>
    )
}

export default About
