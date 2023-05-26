import Icon from "@mdi/react";
import {
  mdiClose,
  mdiPuzzleEdit,
  mdiLaptop,
  mdiShieldAccount,
  mdiBriefcase,
} from "@mdi/js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mobile: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    height: "100vh",
    width: "60vw",
    position: "absolute",
    right: 0,
    top: 0,
    padding: "17px 12px",
  },
  mobileOptions: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: "25px",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  mobileOption: {
    display: "flex",
    margin: "12px 0px",
    fontSize: "16px",
    "& a": {
      textDecoration: "none",
      color: "black",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-end",
    },
  },
  closeIcon: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Mobile = ({ open, setOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.mobile}>
      <div className={classes.closeIcon} onClick={() => setOpen(!open)}>
        <Icon path={mdiClose} size={1.9} color="black" />
      </div>
      <div className={classes.mobileOptions}>
        <div className={classes.mobileOption}>
          <a href="#projects">
            <Icon path={mdiPuzzleEdit} size={1} color="black" />
            Proyectos
          </a>
        </div>
        <div className={classes.mobileOption}>
          <a href="#tecnologies">
            <Icon path={mdiLaptop} size={1} color="black" />
            Tecnologias
          </a>
        </div>
        <div className={classes.mobileOption}>
          <a href="#experience">
            <Icon path={mdiBriefcase} size={1} color="black" />
            Experiencia laboral
          </a>
        </div>
        <div className={classes.mobileOption}>
          <a href="#contact">
            <Icon path={mdiShieldAccount} size={1} color="black" />
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
