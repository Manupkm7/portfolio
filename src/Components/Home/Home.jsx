import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Home.css'
import Body from '../Body/Body'


const Home = () => {
    return (
        <div className='home'>
        <div>
            <Header />
        </div>
        <div>
            <Body />
        </div>
        <div>
            <Footer />
        </div>
        </div>
    )
}

export default Home
