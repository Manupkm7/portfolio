import Separator from "../../Common/Separator/Separator";
import { WorkData } from "../../Data/Work";
import ExperienceCard from "./ExperienceCard";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  experience: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  experienceList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 3,
  },
  title: {
    fontWeight: 600,
  },
}));

const Experience = () => {
  const data = WorkData;
  const classes = useStyles();
  return (
    <Box className={classes.experience}>
      <Separator />
      <Typography className={classes.title} variant="h4">
        Experiencia Laboral
      </Typography>
      <Box className={classes.experience}>
        {data.map((data) => {
          return <ExperienceCard data={data} />;
        })}
      </Box>
    </Box>
  );
};

export default Experience;
