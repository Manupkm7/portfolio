import React, { useState } from "react";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    padding: "10px",
    borderRadius: "3px",
    width: "95%",
    position: "relative",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    fontSize: "2.3rem",
    color: "blueviolet",
    fontWeight: 800,
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px"
    }
  },
  menu: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  webMenu: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    }
  },
  mobileMenu: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    }
  },
  menuIcon: {
    fontSize: "1rem",
  }
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div>
        <a className={classes.logo} href="/">
          Portfolio
        </a>
      </div>
      <div className={classes.menu}>
        <div className={classes.webMenu}>
          <Web />
        </div>
        <div className={classes.mobileMenu}>
          <div onClick={() => setOpen(!open)}>
            <Icon
              className={classes.menuIcon}
              path={mdiMenu}
              size={2.5}
              color="black"
            />
          </div>
          {open && <Mobile open={open} setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
