import React from 'react'
import SocialContact from '../../Common/SocialContact/SocialContact'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                <p>Hola, bienvenido <br /> <span className='info-name'>Yo soy Manuel Espinoza </span>
                <br /> Y amo experimentar con el desarrollo web</p>
                </div>
                <div className="about-img">
                    <img src={require('../../Utils/Img/Code.png').default} alt='foto-codigo' className='picture'/>
                </div>
            </div>
            <div className="about-contact">
                <SocialContact />
            </div>
        </div>
    )
}

export default About
