import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  skillCards: {
    width: "max-content",
    padding: 2,
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    borderRadius: 1,
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 60,
    // },
  },
  skillIcon: {
    fontSize: 80,
    // [theme.breakpoints.down("xs")]: {
    //   width: "max-content",
    //   height: 100,
    // },
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
