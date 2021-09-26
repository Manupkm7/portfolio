import React from 'react'
import Icon from '@mdi/react'
import {mdiPuzzleEdit,mdiLaptop,mdiShieldAccount,mdiBriefcase} from '@mdi/js'
import './Web.css'

const Web = () => {
    return (
        <div className='web'>
            <div className='web-option'>
            <a href='#project'>
                <Icon className='option-icon' path={mdiPuzzleEdit} size={1.5} color="black"/>
                Proyectos
            </a>
            </div>
            <div className='web-option'>
            <a href='#tecnologies'>
                <Icon className='option-icon' path={mdiLaptop} size={1.5} color="black"/>
                Tecnologias
            </a>            
            </div>
            <div className='web-option'>
            <a href='#experiencie'>
                <Icon className='option-icon' path={mdiBriefcase} size={1.5} color="black"/>
                Experiencia laboral
            </a> 
            </div>
            <div className='web-option'>
            <a href='#contact'>
                <Icon className='option-icon' path={mdiShieldAccount} size={1.5} color="black"/>
                Contacto
            </a> 
            </div>
        </div>
    )
}

export default Web
