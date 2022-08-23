import React from 'react'
import { ProjectsDataWork } from '../../Data/Projects'
import ProjectCard from './ProjectCardWork';
import Separator from '../../Common/Separator/Separator'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(()=>({
    projects: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    title: {
        fontWeight: 600,
    },
}))

const ProjectsWorks = () => {
    const classes = useStyles();

    return (
        <Box className={classes.projects}>
            <Separator />
            <Typography className={classes.title} variant="h4">Proyectos Laborales</Typography>
            <Box>
                {(ProjectsDataWork || []).map((project)=>{
                    return <ProjectCard project={project}/> 
                })}
            </Box>
        </Box>
    )
}

export default ProjectsWorks;
