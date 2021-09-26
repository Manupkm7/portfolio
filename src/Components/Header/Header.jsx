import React, { useState } from 'react'
import Web from './Web/Web'
import Mobile from './Mobile/Mobile'
import Icon from '@mdi/react'
import {mdiMenu} from '@mdi/js' 

import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='header'>
            <div><a className='logo' href='/'>Portfolio</a></div>
            <div className='menu'>
                <div className='web-menu'><Web /></div>
                <div className='mobile-menu'>
                    <div onClick={()=>setOpen(!open)}>
                    <Icon className='menu-icon' path={mdiMenu} size={2.5} color="black"/>
                    </div>
                    {open && <Mobile open={open} setOpen={setOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
