import React from 'react'
import Layout from '../../components/Layout/Layout'
import Register from '../About/colums/Register/Register'
import DiviCon from './columns/DiviCon/DiviCon'
import Tickets from './columns/Tickets/Tickets'
import Topics from './columns/Topics/Topics'
import cs from './Home.css'

const Home = () => {
    return (
        <Layout navTitle={'Home'}>
            <DiviCon />
            <Topics />
            <Tickets />
            <Register />
        </Layout>
    )
}

export default Home
