import React from 'react'
import Icon from '@mdi/react'
import {mdiWebCheck} from '@mdi/js'
import './Projects.css'

const ProjectCard = ({project}) => {
    return (
        <div className='project-card'>
            <div className="project-info">
                <label className='project-title'>{project.title}</label>
                <div className="projects-links">
                    {project.demo&&(
                        <a className='project-link' href={project.demo}>
                            <div className='links-button'>
                                <Icon path={mdiWebCheck} size={0.8} color="black"/> Demo
                            </div>
                        </a>
                    )}
                    {project.github&&(
                        <a className='project-link' href={project.github}>
                            <div className='links-button'>
                            <i class="devicon-github-original-wordmark colored"></i> Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className='project-tags'>
                    {project.tags.map((tag)=>{
                        return <label className='tag'>{tag}</label>
                    })}
                </div>
            </div>
        <img src={project.image} alt="imagenes" className='project-photo' />
        </div>
    )
}

export default ProjectCard
