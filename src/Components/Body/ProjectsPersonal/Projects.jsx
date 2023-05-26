import { ProjectsDataPersonal } from "../../Data/Projects";
import ProjectCard from "./ProjectCard";
import Separator from "../../Common/Separator/Separator";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  projects: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontWeight: 600,
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Box className={classes.projects}>
      <Separator />
      <Typography className={classes.title} variant="h4">
        Proyectos Personales
      </Typography>
      <Box>
        {(ProjectsDataPersonal || []).map((project) => {
          return <ProjectCard project={project} />;
        })}
      </Box>
    </Box>
  );
};

export default Projects;
