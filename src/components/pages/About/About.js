import React from 'react'
import Tilt from 'react-tilt'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import { AboutCard } from '../../Card/Card'
import Heading from '../../Heading/Heading'
import aboutConfig from './config'
import './About.css'

import portrait from '../../../img/portrait.jpg'

const About = ({ location }) => (
  <>
    <Menu location={location.pathname} className='page' />
    <div>
      <main id='about'>
        <Heading title='About' />
        <div className='about-info'>
          <img src={portrait} alt='Ioan Zîcu' className='bio-image' />
          <div className='bio'>
            <h2 className='text-secondary'>
              Let me tell you a few things...
              <hr />
            </h2>
            <p>
              I am a young Computer Science student, passionate about web
              technologies, programming languages and cloud computing. Able to
              develop a full-stack web application with RESTful and API
              functionality. Interested in learning the new practical skills for
              increasing problem-solving ability.
            </p>
          </div>
          {aboutConfig &&
            aboutConfig.map(({ id, icon, title, description }, index) => (
              <Tilt key={id} className='Tilt' options={{ max: 25 }}>
                <AboutCard
                  className='Tilt-inner'
                  icon={icon}
                  title={title}
                  description={description}
                  index={index + 1}
                />
              </Tilt>
            ))}
        </div>
      </main>
    </div>
    <Footer />
  </>
)

export default About
