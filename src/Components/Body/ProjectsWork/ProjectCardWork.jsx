import Icon from "@mdi/react";
import { mdiWebCheck } from "@mdi/js";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  projectCard: {
    display: "flex",
    flex: 1,
    marginTop: 14,
    marginBottom: 14,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 2,
    padding: 1,
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  boxLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    alignContent: "flex-start",
    alignItems: "flex-start",
    padding: 4,
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
    },
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
    flexWrap: "wrap",
    marginTop: 4,
    gap: 4,
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
    },
  },
  projectPhoto: {
    width: "300px",
    borderRadius: 4 * 3,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "0.3s ease-in-out",
    },
  },
  tag: {
    padding: 6,
    backgroundColor: "aquamarine",
    borderRadius: 4,
  },
  aLinks: {
    display: "flex",
    justifyContent: "flex-end",
    width: "40%",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
      width: "70%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "60%",
      padding: 8,
    },
    [theme.breakpoints.only("md")]: {
      width: "60%",
      padding: 8,
    },
  },
  titles: {
    display: "flex",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
      margin: 0,
      marginTop: 4,
    },
    fontSize: 32,
  },
  aboutText: {
    fontSize: 14,
    [theme.breakpoints.only("xs")]: {
      padding: 0,
      margin: 0,
    },
  },
}));

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  return (
    <Box className={classes.projectCard}>
      <Box>
        <label className={classes.titles} variant="h5">
          {project.title}
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
          </Box>
        </label>

        <label className={classes.aboutText} variant="body1">
          {project.about}
        </label>
        <Box className={classes.projectTags}>
          {project.tags.map((tag) => {
            return <label key={tag} className={classes.tag}>{tag}</label>
          })}
        </Box>
      </Box>
      <a
        target="_blank"
        rel="noreferrer"
        className={classes.aLinks}
        href={project.demo}
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
