import React from 'react'
import './Projects.css'
import {ProjectsData} from '../../Data/Projects'
import ProjectCard from './ProjectCard';
import Separator from '../../Common/Separator/Separator'
const Projects = () => {
    const data = ProjectsData;
    return (
        <div className='projects'>
            <Separator />
            <label className='section-title'>Proyectos</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project}/> 
                })}
            </div>
        </div>
    )
}

export default Projects
