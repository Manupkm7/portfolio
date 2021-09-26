import React from 'react'
import './Contact.css'
import Separator from '../../Common/Separator/Separator'
import SocialContact from '../../Common/SocialContact/SocialContact'
import Icon from '@mdi/react'
import {mdiCloudDownload} from '@mdi/js'

const Contact = () => {
    return (
        <div className='contact'>
            <Separator />
            <label className="section-title">Contactame</label>
            <div className='contact-container'>
            <div className='contact-left'>
                <p>Podrás encontrarme en cualquiera de estas plataformas 👇</p>
                <SocialContact />
            </div>
            <div className="download">
                <a className='download-link' download href={require('../../Utils/VictorManuelEspinozaCV.pdf').default}>
                    <Icon className='icon-download' path={mdiCloudDownload} size={0.9} color='black' />
                    Descargar Curriculum
                </a>
            </div>
            </div>
        </div>
    )
}

export default Contact
