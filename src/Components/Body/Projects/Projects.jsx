import React from 'react'
import './Projects.css'
import {ProjectsData} from '../../Data/Projects'
import ProjectCard from './ProjectCard';
import Separator from '../../Common/Separator/Separator'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    projects: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    title: {
        fontWeight: 600,
    },
}))

const Projects = () => {
    const classes = useStyles();
    const data = ProjectsData;
    return (
        <Box className={classes.projects}>
            <Separator />
            <Typography className={classes.title} variant="h4">Proyectos</Typography>
            <Box>
                {data.map((project)=>{
                    return <ProjectCard project={project}/> 
                })}
            </Box>
        </Box>
    )
}

export default Projects
