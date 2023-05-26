import { ProjectsDataWork } from "../../Data/Projects";
import ProjectCard from "./ProjectCardWork";
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
    fontWeight: "700 !important"
  },
}));

const ProjectsWorks = () => {
  const classes = useStyles();

  return (
    <Box className={classes.projects}>
      <Separator />
      <Typography className={classes.title} variant="h4">
        Proyectos Laborales
      </Typography>
      <Box>
        {(ProjectsDataWork || []).map((project) => {
          return <ProjectCard project={project} />;
        })}
      </Box>
    </Box>
  );
};

export default ProjectsWorks;
