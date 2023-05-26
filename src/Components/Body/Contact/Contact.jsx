import Separator from "../../Common/Separator/Separator";
import SocialContact from "../../Common/SocialContact/SocialContact";
import Icon from "@mdi/react";
import { mdiCloudDownload } from "@mdi/js";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  contact: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  sectionTitle: {
    fontWeight: "700 !important"
  },
  contactContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 2,
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
  },
  contactLeft: {
    maxWidth: "60%",
    fontSize: 18,
    textAlign: "center",
  },
  download: {
    backgroundColor: "aquamarine",
    padding: 8,
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    border: "none",
    width: "200px",
    height: "40px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
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
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contact}>
      <Separator />
      <Typography variant="h4" className={classes.sectionTitle}>
        Contactame
      </Typography>
      <Box className={classes.contactContainer}>
        <Box className={classes.contactLeft}>
          <label>
            Podrás encontrarme en cualquiera de estas plataformas 👇
          </label>
          <SocialContact />
        </Box>
        <Box className={classes.download}>
          <a
            className={classes.downloadLink}
            download
            href="Victor_Manuel Espinoza_Resume.pdf"
          >
            <Icon
              className={classes.iconDownload}
              path={mdiCloudDownload}
              size={0.9}
              color="black"
            />
            Descargar Curriculum
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
