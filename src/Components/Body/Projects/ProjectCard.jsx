import React from 'react'
import Icon from '@mdi/react'
import {mdiWebCheck} from '@mdi/js'
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    projectCard: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column-reverse",
        },
    },
    boxLinks: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        alignContent: "flex-start",
        alignItems: "flex-start",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
        },
    },
    links: {
        textDecoration: "none",
        fontSize: 19,
        color: "black",
    },
    linkButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aquamarine",
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        fontSize: 16,
        width: "max-content",
        marginRight: "5px"
    },
    projectTags: {
        display: "flex",
        maxWidth: "60%",
        flexWrap: "wrap",
        margin: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            maxWidth: "100%",
            justifyContent: "center",

        },
    },
    projectPhoto: {
        width: "70%",
        borderRadius: theme.shape.borderRadius * 3,
    },
    tag: {
        padding: theme.spacing(1),
        backgroundColor: "aquamarine",
        borderRadius: theme.shape.borderRadius,
        margin: theme.spacing(1),

    },
    projectInfo: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            marginTop: theme.spacing(2),
        },
    },
    aLinks: {
        display: "flex", 
        justifyContent: "flex-end",
        width: "40%",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
            width: "70%",
        },
    },
    titles: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
            margin: 0,
            marginTop: theme.spacing(4)
        },
        fontSize: 32,
    },
}))

const ProjectCard = ({project}) => {
    const classes = useStyles();
    return (
        <Box className={classes.projectCard}>
            <Box className={classes.projectInfo}>
                <label className={classes.titles} variant="h5">{project.title}</label>
                <Box className={classes.boxLinks}>
                    {project.demo&&(
                        <a className={classes.links} target="_blank" rel="noreferrer" href={project.demo}>
                            <Box className={classes.linkButton}>
                                <Icon path={mdiWebCheck} size={0.8} color="black"/> Demo
                            </Box>
                        </a>
                    )}
                    {project.github&&(
                        <a className={classes.links} target="_blank" rel="noreferrer" href={project.github}>
                            <Box className={classes.linkButton}>
                            <i class="devicon-github-original-wordmark colored"></i> Github
                            </Box>
                        </a>
                    )}
                </Box>
                <label style={{ padding: 8, margin: 8, fontSize: 20 }} variant="body1">{project.about}</label>
                <Box className={classes.projectTags}>
                    {project.tags.map((tag)=>{
                        return <label className={classes.tag}>{tag}</label>
                    })}
                </Box>
            </Box>
            <a target="_blank" rel="noreferrer" className={classes.aLinks} href={project.github}>
                <img src={project.image} alt="imagenes" className={classes.projectPhoto} />
            </a>
        </Box>
    )
}

export default ProjectCard
