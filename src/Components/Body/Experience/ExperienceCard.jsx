import React from 'react'
import './Experience.css'

const ExperienceCard = ({data}) => {
    return (
        <div className='work-card'>
            <img src={data.logo} alt='logo techo' className='work-logo'/>
            <div className="work-info">
                <label className='company-name'>{data.company}</label>
                <div className="work-dates">
                    <label>{data.dateJoining} -</label><label>{data.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <div><p>{data.work}</p></div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
