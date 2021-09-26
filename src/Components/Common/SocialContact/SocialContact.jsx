import React from 'react'
import {SocialDetail} from '../../Data/Index'
import './SocialContact.css'

const SocialContact = () => {
    const data = SocialDetail
    return (
        <div className='social-contact'>
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className='social-icon-div'>
                            <img src={item.icon} alt='social media' className='social-icon' />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
