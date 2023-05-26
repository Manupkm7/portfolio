import React from "react";
import Icon from "@mdi/react";
import {
  mdiPuzzleEdit,
  mdiLaptop,
  mdiShieldAccount,
  mdiBriefcase,
} from "@mdi/js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  web: {
    display: "flex",
    flex: 1,
    alignItems: "center"
  },
  webOption: {
    fontSize: "17px",
    marginRight: "15px",
    fontWeight: 700,
    "& a": {
      textDecoration: "none",
      color: "black",
      display: "flex",
      alignItems: "center",
    },
  },
  optionIcon: {
    display: "flex",
    alignItems: "center",
    marginRight: "5px",
    ":last-child": {
        marginRight: 0,
    },
  }
}));

const Web = () => {
  const classes = useStyles();
  return (
    <div className={classes.web}>
      <div className={classes.webOption}>
        <a href="#projects">
          <Icon
            className={classes.optionIcon}
            path={mdiPuzzleEdit}
            size={1.5}
            color="black"
          />
          Proyectos
        </a>
      </div>
      <div className={classes.webOption}>
        <a href="#tecnologies">
          <Icon
            className={classes.optionIcon}
            path={mdiLaptop}
            size={1.5}
            color="black"
          />
          Tecnologias
        </a>
      </div>
      <div className={classes.webOption}>
        <a href="#experience">
          <Icon
            className={classes.optionIcon}
            path={mdiBriefcase}
            size={1.5}
            color="black"
          />
          Experiencia laboral
        </a>
      </div>
      <div className={classes.webOption}>
        <a href="#contact">
          <Icon
            className={classes.optionIcon}
            path={mdiShieldAccount}
            size={1.5}
            color="black"
          />
          Contacto
        </a>
      </div>
    </div>
  );
};

export default Web;
