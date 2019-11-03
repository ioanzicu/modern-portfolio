import React from 'react'
import Menu from './Menu'

const MainPage = ({ location }) => (
  <>
    <Menu location={location.pathname} className='page' />

    <main id='home'>
      <h1 className='lg-heading'>
        Zîcu
        <span className='text-secondary'> Ioan</span>
      </h1>

      <div className='typewriter'>
        <p className='subtitle'>
          geek + smart + curious + creative + ingenious + amiable ={' '}
          <span className='text-secondary'>
            <b>
              ME
              <span className='smile-section'>
                <i className='top-smile fas fa-smile-wink fa-2x' />
                <i className='bottom-smile fas fa-smile fa-2x' />
              </span>
            </b>
          </span>
        </p>
      </div>

      <h2 className='sm-heading'>
        Full Stack Developer, Programmer, Designer & Good Guy
      </h2>
      <div className='icons'>
        <a
          href='https://codepen.io/ioanzicu/'
          title='See my projects on Codepen'>
          <i className='fab fa-codepen fa-2x' />
        </a>
        <a
          href='https://www.linkedin.com/in/ioan-z%C3%AEcu-29109b161/'
          title='Keep in touch on Linkedin'>
          <i className='fab fa-linkedin fa-2x' />
        </a>
        <a
          href='https://www.github.com/ioanzicu'
          title='Check my projects on GitHub'>
          <i className='fab fa-github fa-2x' />
        </a>
      </div>
    </main>
  </>
)

export default MainPage
