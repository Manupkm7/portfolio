import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    skillCards: {
        width: "max-content",
        padding: theme.spacing(2),
        height: "120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("xs")]: {
            fontSize: 60,
        },
    },
    skillIcon: {
        fontSize: 80,
        [theme.breakpoints.down("xs")]: {
            width: "max-content",
            height: 100,
        },
    },
    skillName: {
        fontSize: "1.5rem",

    },
}))

const SkillCard = ({skill}) => {
    const classes = useStyles();
    return (
        <Box className={classes.skillCards}>
            <Box className={classes.skillIcon}>{skill.icon}</Box>
            <label className={classes.skillName}>{skill.name}</label>
        </Box>
    )
}

export default SkillCard
