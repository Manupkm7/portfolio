import React from 'react'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    about: {
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
}))

const Body = () => {
    const classes = useStyles();
    return (
        <Box className={classes.body}>
          <section id='about'>
            <About />
          </section>
          <section id='projects'>
            <Projects />
          </section>
          <section id='tecnologies'>
            <Skills />
          </section>
          <section id='experience'>
            <Experience />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </Box>
    )
}

export default Body
