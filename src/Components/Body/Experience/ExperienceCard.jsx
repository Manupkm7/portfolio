import ModalWindow from "./ModalWindow";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  workCard: {
    padding: 4,
    marginTop: 4.2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "space-evenly",
      flexDirection: "column",
      margin: 8,
    },
  },
  workLogo: {
    width: "80px",
    [theme.breakpoints.only("xs")]: {
      width: "30%",
    },
  },
  workDesc: {
    width: "80%",
    textAlign: "left",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  workInfo: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "40%",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      alignItems: "center",
    },
  },
  workComp: {
    fontWeight: "600 !important",
    textDecoration: "underline",
  },
  links: {
    color: "black",
    textDecoration: "none",
    transition: "0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "0.2s ease-in-out",
    },
  },
  linkImage: {
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      justifyContent: "center",
      padding: 4,
    },
  },
}));

const ExperienceCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.workCard}>
      <a
        href={data.url}
        className={classes.linkImage}
        target="_blank"
        rel="noreferrer"
      >
        <img src={data.logo} alt="logo techo" className={classes.workLogo} />
      </a>
      <Box className={classes.workInfo}>
        <a
          href={data.url}
          className={classes.links}
          target="_blank"
          rel="noreferrer"
        >
          <Typography className={classes.workComp} noWrap>
            {data.company}
          </Typography>
        </a>
        <Box>
          <Typography variant="caption">{data.dateJoining} -</Typography>
          <Typography variant="caption">{data.dateEnd}</Typography>
        </Box>
        <Box className={classes.workDesc}>
          <Box>
            <p>{data.work}</p>
            <ModalWindow data={data} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
