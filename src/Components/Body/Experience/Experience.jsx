import React from 'react'
import Separator from '../../Common/Separator/Separator'
import {WorkData} from '../../Data/Work'
import ExperienceCard from './ExperienceCard'
import './Experience.css'

const Experience = () => {
    const data = WorkData
    return (
        <div className='experience'>
            <Separator />
            <label className="section-title">Experiencia Laboral</label>
            <div className="experiencie-list">
                {data.map((data)=>{
                    return <ExperienceCard data={data} />
                })}
            </div>
        </div>
    )
}

export default Experience
