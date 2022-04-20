import React from 'react'
import Separator from '../../Common/Separator/Separator'
import { WorkData } from '../../Data/Work'
import ExperienceCard from './ExperienceCard'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    experience: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    experienceList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(3)
    },
    title: {
        fontWeight: 600,
    },
}))

const Experience = () => {
    const data = WorkData
    const classes = useStyles();
    return (
        <Box className={classes.experience}>
            <Separator />
            <Typography className={classes.title} variant="h6">Experiencia Laboral</Typography>
            <Box className={classes.experience}>
                {data.map((data)=>{
                    return <ExperienceCard data={data} />
                })}
            </Box>
        </Box>
    )
}

export default Experience
