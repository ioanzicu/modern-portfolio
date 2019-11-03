import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import portrait from '../img/portrait.jpg'

const content = [
  {
    title: 'Voluntary',
    icon: 'fas fa-hands-helping fa-3x',
    description:
      'Initiating, organizing and running a series of C# (basic elements) trainings attended by 15 international students of computer science. (Spring 2018)'
  },
  {
    title: 'Extracurricular activity',
    icon: 'fas fa-users fa-3x',
    description:
      'Participating at the series of the workshops and hakatons on the topics: Heuristic methods, Designing web applications, Coding and Designing of embedded systems, Textronic. (October 2018 - March 2019)'
  },
  {
    title: 'Self taught',
    icon: 'fas fa-laptop-code fa-3x',
    description:
      'I am a self taught coder, motivated to gain knowledge and experience in top technologies for increasing the level of skills and professionalism.'
  }
]

const About = ({ location }) => (
  <>
    <Menu location={location.pathname} className='page' />
    <div>
      <main id='about'>
        <h1 className='lg-heading'>
          About
          <span className='text-secondary'> Me</span>
        </h1>
        <div className='about-info'>
          <img src={portrait} alt='Ioan Zîcu' className='bio-image' />
          <div className='bio'>
            <h2 className='text-secondary'>
              Let me tell you a few things...
              <hr />
            </h2>
            <p>
              I am a young geek, passionate about web technologies, networking
              and programming languages like JavaScript (Node.js), PHP, Python
              and C#. Able to develop full-stack web application with RESTful
              and API functionality. Interested in learning the new practical
              skills for increasing problem solving ability.
            </p>
          </div>
          {content.map(({ icon, title, description }, index) => (
            <div key={title} className={`job job-${index + 1}`}>
              <div className='job-title'>
                <i className={icon} />
                <h2>
                  <b>{title}</b>
                  <hr />
                </h2>
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
    <Footer />
  </>
)

export default About
