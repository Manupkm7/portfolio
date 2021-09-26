import React from 'react'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'

const Body = () => {
    return (
        <div className='body'>
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
        </div>
    )
}

export default Body
