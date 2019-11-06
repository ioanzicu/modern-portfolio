import React from 'react'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Heading from '../../Heading/Heading'
import { SkillsCard } from '../../Card/Card'
import skillsConfig from './config'
import './Skills.css'

const Achievements = () => (
  <div className='achievements'>
    <div>
      1.{' '}
      <a
        className='achievement-item'
        href='https://www.freecodecamp.org/certification/fccdeddf4b2-8af4-4000-95ab-864887c0afab/responsive-web-design'>
        Responsive Web Design
      </a>
    </div>
    <div>
      2.{' '}
      <a
        className='achievement-item'
        href='https://www.freecodecamp.org/certification/fccdeddf4b2-8af4-4000-95ab-864887c0afab/javascript-algorithms-and-data-structures'>
        JavaScript Algorithms and Data Structures
      </a>
    </div>
  </div>
)

const Skills = ({ location }) => {
  return (
    <>
      <Menu location={location.pathname} className='page' />
      <div>
        <main id='about'>
          <Heading
            title='My'
            secondaryTitle='Skills'
            subtitle='Achievements'
            subtitleIcon='text-secondary fas fa-medal fa-1x'
          />
          <Achievements />
          <div className='about-info'>
            {skillsConfig &&
              skillsConfig.map(({ title, icons }, index) => (
                <SkillsCard title={title} icons={icons} cardNr={index + 1} />
              ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Skills
