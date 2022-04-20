import React from 'react'
import ModalWindow from './ModalWindow'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    workCard: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(1.2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row-reverse",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-evenly",
            flexDirection: "column-reverse"
        },
    },
    workLogo: {
        width: "80px",
        [theme.breakpoints.down("xs")]: {
            width: "30%",
        },
    },
    workDesc: {
        width: "80%",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            textAlign: "center",
        },
    },
    workInfo: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "40%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            alignItems: "center"

        },
    },
    workComp: {
        fontWeight: 600,
        textDecoration: "underline",
    },
    links: {
        color: "black",
        textDecoration: "none",
    },
    linkImage: {
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            justifyContent: "center",
            padding: theme.spacing(1),
        },
    },
}))

const ExperienceCard = ({data}) => {
    const classes = useStyles();
    return (
        <Box className={classes.workCard}>
                <a href={data.url} className={classes.linkImage} target="_blank" rel='noreferrer'>
                    <img src={data.logo} alt='logo techo' className={classes.workLogo}/>
                </a>
            <Box className={classes.workInfo}>
                <a href={data.url} className={classes.links} target="_blank" rel='noreferrer'>
                    <Typography className={classes.workComp} noWrap>{data.company}</Typography>
                </a>
                <Box>
                    <Typography variant="caption">{data.dateJoining} -</Typography><Typography variant="caption">{data.dateEnd}</Typography>                    
                </Box>
                <Box className={classes.workDesc}>
                    <Box>
                        <p>{data.work}</p>
                        <ModalWindow data={data} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ExperienceCard
