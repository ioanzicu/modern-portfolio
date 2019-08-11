import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu location={this.props.location.pathname} className='page' />
        <div>
          <main id='about'>
            <h1 className='lg-heading'>
              About
              <span className='text-secondary'> Me</span>
            </h1>
            <div className='about-info'>
              <img
                src='/static/media/portrait.91f8acd9.jpg'
                alt='Ioan Zicu'
                className='bio-image'
              />
              <div className='bio'>
                <h2 className='text-secondary'>
                  Let me tell you a few things...
                  <hr />
                </h2>
                <p>
                  I am a young geek, passionate about web technologies,
                  networking and programming languages like JavaScript
                  (Node.js), PHP, Python and C#. Able to develop full-stack web
                  application with RESTful and API functionality. Interested in
                  learning the new practical skills for increasing problem
                  solving ability.
                </p>
              </div>

              <div className='job job-1'>
                <div className='job-title'>
                  <i className='fas fa-hands-helping fa-3x' />
                  <h2>
                    <b>Voluntary</b>
                    <hr />
                  </h2>
                </div>
                <p>
                  Initiating, organizing and running a series of C# (basic
                  elements) trainings attended by 15 international students of
                  computer science. (Spring 2018)
                </p>
              </div>

              <div className='job job-2'>
                <div className='job-title'>
                  <i className='fas fa-users fa-3x' />
                  <h2>
                    <b>Extracurricular activity</b>
                  </h2>
                  <hr />
                </div>
                <p>
                  Participating at the series of the workshops and hakatons on
                  the topics: Heuristic methods, Designing web applications,
                  Coding and Designing of embedded systems, Textronic. (October
                  2018 - March 2019)
                </p>
              </div>

              <div className='job job-3'>
                <div className='job-title'>
                  <i className='fas fa-laptop-code fa-3x' />
                  <h2>
                    <b>Self taught</b>
                  </h2>
                  <hr />
                </div>
                <p>
                  I am a self taught coder, motivated to gain knowledge and
                  experience in top technologies for increasing the level of
                  skills and professionalism.
                </p>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </React.Fragment>
    )
  }
}
