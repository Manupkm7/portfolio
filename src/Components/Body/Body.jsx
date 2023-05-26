import About from "./About/About";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import { Box } from "@mui/material";
import ProjectsWorks from "./ProjectsWork/Projects";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  about: {
    padding: 8,
    paddingBottom: 8,
  },
}));

const Body = () => {
  const classes = useStyles();
  return (
    <Box className={classes.body}>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectsWorks />
      </section>
      <section id="tecnologies">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Box>
  );
};

export default Body;
