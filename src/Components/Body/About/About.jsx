import SocialContact from "../../Common/SocialContact/SocialContact";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    paddingBottom: 5,
  },
  aboutTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // [theme.breakpoints.only("xs")]: {
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
  },
  aboutInfo: {
    fontSize: "2rem",
    // [theme.breakpoints.only("xs")]: {
    //   fontSize: "1.5rem",
    // },
  },
  infoName: {
    color: "blueviolet",
    fontSize: "2.5rem",
    // [theme.breakpoints.only("xs")]: {
    //   fontSize: "2rem",
    // },
  },
  picture: {
    height: 415,
    // [theme.breakpoints.only("xs")]: {
    //   height: 280,
    // },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Box className={classes.aboutTop}>
        <Box className={classes.aboutInfo}>
          <p>
            Hola, bienvenido 😺
            <br />
            <span className={classes.infoName}>Yo soy Manuel Espinoza </span>
            <br /> Y amo experimentar con el desarrollo web
          </p>
        </Box>
        <Box>
          <img
            src={require("../../Utils/Img/Code.png").default}
            alt="foto-codigo"
            className={classes.picture}
          />
        </Box>
      </Box>
      <Box className="about-contact">
        <SocialContact />
      </Box>
    </Box>
  );
};

export default About;
