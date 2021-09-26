import React from 'react'
import './Skills.css'
import {SkillsData} from '../../Data/Skills'
import Separator from '../../Common/Separator/Separator'
import SkillCard from './SkillCard'

const Skills = () => {
    const data = SkillsData
    return (
        <div className='skills'>
            <Separator />
            <label className='section-title'>Tecnologias</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return (
                        <div className='skills-section'>
                            <label className='skills-section-title'>{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return <SkillCard skill={skill} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
