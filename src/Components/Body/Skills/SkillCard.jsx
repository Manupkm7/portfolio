import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  skillCards: {
    width: "max-content",
    padding: 4,
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    cursor: "pointer",
    borderRadius: 4,
    marginTop: 8,
    [theme.breakpoints.only("xs")]: {
      fontSize: 60,
    },
  },
  skillIcon: {
    fontSize: 80,
    [theme.breakpoints.only("xs")]: {
      width: "max-content",
      height: 100,
      padding: 4,
    },
    [theme.breakpoints.only("sm")]: {
      width: "max-content",
      height: 100,
      padding: 4,
    },
    [theme.breakpoints.only("md")]: {
      width: "max-content",
      height: 100,
      padding: 4,
    },
  },
  skillName: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  skillTarget: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "0.3s ease-in-out",
    },
    cursor: "pointer",
  }
}));

const SkillCard = ({ skill }) => {
  const classes = useStyles();
  return (
    <a href={skill.link} className={classes.skillTarget} target="_blank" rel="noreferrer">
      <Box className={classes.skillCards}>
        <img className={classes.skillIcon} alt={skill.name} src={skill.icon} />
        <label className={classes.skillName}>{skill.name}</label>
      </Box>
    </a>
  );
};

export default SkillCard;
