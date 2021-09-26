import React from 'react'
import Icon from '@mdi/react'
import {mdiClose,mdiPuzzleEdit,mdiLaptop,mdiShieldAccount,mdiBriefcase} from '@mdi/js'
import './Mobile.css'

const Mobile = ({open, setOpen}) => {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={()=>setOpen(!open)}>
                <Icon path={mdiClose} size={1.9} color="black"/>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
            <a href='#projects'>
                <Icon className='option-icon' path={mdiPuzzleEdit} size={1.5} color="black"/>
                Proyectos
            </a>
            </div>
            <div className='mobile-option'>
            <a href='#tecnologies'>
                <Icon className='option-icon' path={mdiLaptop} size={1.5} color="black"/>
                Tecnologias
            </a>            
            </div>
            <div className='mobile-option'>
            <a href='#experience'>
                <Icon className='option-icon' path={mdiBriefcase} size={1.5} color="black"/>
                Experiencia laboral
            </a> 
            </div>
            <div className='mobile-option'>
            <a href='#contact'>
                <Icon className='option-icon' path={mdiShieldAccount} size={1.5} color="black"/>
                Contacto
            </a> 
            </div>
            </div>
        </div>
    )
}

export default Mobile
