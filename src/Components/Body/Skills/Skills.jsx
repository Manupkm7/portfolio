import React from 'react'
import {SkillsData} from '../../Data/Skills'
import Separator from '../../Common/Separator/Separator'
import SkillCard from './SkillCard'

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    skill: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    skillsSection: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    skillTitle: {
        fontSize: 25,
        fontWeight: 700,
    },
    skillList: {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "70%",
        justifyContent: "flex-end",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "100",
            justifyContent: "center",
        },
        
    },
}))

const Skills = () => {
    const data = SkillsData
    const classes = useStyles();

    return (
        <Box className={classes.skill}>
            <Separator />
            <Typography variant="h4">Tecnologias</Typography>
            <Box>
                {data.map((item)=>{
                    return (
                        <Box className={classes.skillsSection}>
                            <label className={classes.skillTitle}>{item.type}</label>
                            <Box className={classes.skillList}>
                                {item.list.map((skill)=>{
                                    return <SkillCard skill={skill} />
                                })}
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Skills
