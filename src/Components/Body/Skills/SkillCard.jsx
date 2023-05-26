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
  },
}));

const SkillCard = ({ skill }) => {
  const classes = useStyles();
  return (
    <Box className={classes.skillCards}>
      <Box className={classes.skillIcon}>{skill.icon}</Box>
      <label className={classes.skillName}>{skill.name}</label>
    </Box>
  );
};

export default SkillCard;
