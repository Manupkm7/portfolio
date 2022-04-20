import React from 'react'
import Separator from '../../Common/Separator/Separator'
import SocialContact from '../../Common/SocialContact/SocialContact'
import Icon from '@mdi/react'
import { mdiCloudDownload } from '@mdi/js'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    contact: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    sectionTitle: {
        fontWeight: 700,
    },
    contactContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    contactLeft: {
        maxWidth: "60%",
        fontSize: 18,
        textAlign: "center",
    },
    download: {
        backgroundColor: "aquamarine",
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    downloadLink: {
        textDecoration: "none",
        color: "black",
        display: "flex",
        textAlign: "center",
    },
    iconDownload: {
        marginRight: "5px",
    },
}))

const Contact = () => {
    const classes = useStyles();

    return (
        <Box className={classes.contact}>
            <Separator />
            <Typography variant="h4" className={classes.sectionTitle}>Contactame</Typography>
            <Box className={classes.contactContainer}>
                <Box className={classes.contactLeft}>
                    <label>Podrás encontrarme en cualquiera de estas plataformas 👇</label>
                    <SocialContact />
                </Box>
                <Box className={classes.download}>
                    <a className={classes.downloadLink} download href={require('../../Utils/VictorManuelEspinozaCV.pdf').default}>
                        <Icon className={classes.iconDownload} path={mdiCloudDownload} size={0.9} color='black' />
                        Descargar Curriculum
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact
