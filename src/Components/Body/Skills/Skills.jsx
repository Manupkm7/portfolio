import { SkillsData } from "../../Data/Skills";
import Separator from "../../Common/Separator/Separator";
import SkillCard from "./SkillCard";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles(() => ({
  skill: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  skillsSection: {
    display: "flex",
    justifyContent: "space-between",
    margin: 2,
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
  },
  skillTitle: {
    fontSize: 25,
    fontWeight: 700,
  },
  skillList: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "70%",
    justifyContent: "flex-end",
    // [theme.breakpoints.down("xs")]: {
    //   maxWidth: "100",
    //   justifyContent: "center",
    // },
  },
  title: {
    fontWeight: 600,
  },
}));

const Skills = () => {
  const data = SkillsData;
  const classes = styles();

  return (
    <Box className={classes.skill}>
      <Separator />
      <Typography className={classes.title} variant="h4">
        Tecnologias
      </Typography>
      <Box>
        {data.map((item) => {
          return (
            <Box className={classes.skillsSection}>
              <label className={classes.skillTitle}>{item.type}</label>
              <Box className={classes.skillList}>
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
