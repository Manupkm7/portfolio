import Icon from "@mdi/react";
import { mdiWebCheck } from "@mdi/js";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  projectCard: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 2,
    padding: 1,
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column-reverse",
    // },
  },
  boxLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    alignContent: "flex-start",
    alignItems: "flex-start",
    padding: 4,
    // [theme.breakpoints.down("xs")]: {
    //   justifyContent: "center",
    // },
  },
  links: {
    textDecoration: "none",
    fontSize: 19,
    color: "black",
    padding: 4,
    transition: "0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "0.2s ease-in-out",
    },
  },
  linkButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aquamarine",
    padding: 4,
    marginTop: 4,
    borderRadius: 4,
    fontSize: 16,
    width: "max-content",
    marginRight: "5px",
  },
  projectTags: {
    display: "flex",
    maxWidth: "60%",
    flexWrap: "wrap",
    margin: 4,
    // [theme.breakpoints.down("xs")]: {
    //   maxWidth: "100%",
    //   justifyContent: "center",
    // },
  },
  projectPhoto: {
    width: "300px",
    borderRadius: 4 * 3,
  },
  tag: {
    padding: 6,
    backgroundColor: "aquamarine",
    borderRadius: 4,
    margin: 4,
  },
  projectInfo: {
    // [theme.breakpoints.down("xs")]: {
    //   marginLeft: 0,
    //   marginTop: theme.spacing(2),
    // },
  },
  aLinks: {
    display: "flex",
    justifyContent: "flex-end",
    width: "40%",
    // [theme.breakpoints.down("xs")]: {
    //   justifyContent: "center",
    //   width: "70%",
    // },
  },
  titles: {
    margin: 4,
    padding: 4,
    display: "flex",
    // [theme.breakpoints.down("xs")]: {
    //   justifyContent: "center",
    //   margin: 0,
    //   marginTop: theme.spacing(4),
    // },
    fontSize: 32,
  },
  aboutText: {
    fontSize: 20,
    padding: 4,
    margin: 4,
    // [theme.breakpoints.down("xs")]: {
    //   padding: 0,
    //   margin: 0,
    // },
  },
}));

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  return (
    <Box className={classes.projectCard}>
      <Box className={classes.projectInfo}>
        <label className={classes.titles} variant="h5">
          {project.title}
        </label>
        <Box className={classes.boxLinks}>
          {project.demo && (
            <a
              className={classes.links}
              target="_blank"
              rel="noreferrer"
              href={project.demo}
            >
              <Box className={classes.linkButton}>
                <Icon path={mdiWebCheck} size={0.8} color="black" /> Link
              </Box>
            </a>
          )}
          {project.github && (
            <a
              className={classes.links}
              target="_blank"
              rel="noreferrer"
              href={project.github}
            >
              <Box className={classes.linkButton}>
                <i class="devicon-github-original-wordmark colored"></i> Github
              </Box>
            </a>
          )}
        </Box>
        <label className={classes.aboutText} variant="body1">
          {project.about}
        </label>
        <Box className={classes.projectTags}>
          {project.tags.map((tag) => {
            return <label className={classes.tag}>{tag}</label>;
          })}
        </Box>
      </Box>
      <a
        target="_blank"
        rel="noreferrer"
        className={classes.aLinks}
        href={project.github}
      >
        <img
          src={project.image}
          alt="imagenes"
          className={classes.projectPhoto}
        />
      </a>
    </Box>
  );
};

export default ProjectCard;
