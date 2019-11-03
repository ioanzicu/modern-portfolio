import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ location }) => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <header>
      <div
        onClick={toggleMenu}
        className={showMenu ? 'menu-btn close' : 'menu-btn'}>
        <div className='btn-line' />
        <div className='btn-line' />
        <div className='btn-line' />
      </div>

      <nav className={showMenu ? 'menu show' : 'menu'}>
        <div className={showMenu ? 'menu-branding show' : 'menu-branding'}>
          <div className='portrait' />
        </div>

        <ul className={showMenu ? 'menu-nav show' : 'menu-nav'}>
          <li className={showMenu ? 'nav-item show' : 'nav-item'}>
            <Link
              to='/'
              className={location === '/' ? 'nav-link current' : 'nav-link'}>
              <i className='fas fa-home' /> <span>Home</span>
            </Link>
          </li>

          <li className={showMenu ? 'nav-item show' : 'nav-item'}>
            <Link
              to='/skills'
              className={
                location === '/skills' ? 'nav-link current' : 'nav-link'
              }>
              <i className='fas fa-laptop-code' /> Skills
            </Link>
          </li>

          <li className={showMenu ? 'nav-item show' : 'nav-item'}>
            <Link
              to='/about'
              className={
                location === '/about' ? 'nav-link current' : 'nav-link'
              }>
              <i className='fas fa-user' /> About Me
            </Link>
          </li>

          <li className={showMenu ? 'nav-item show' : 'nav-item'}>
            <Link
              to='/work'
              className={
                location === '/work' ? 'nav-link current' : 'nav-link'
              }>
              <i className='fas fa-project-diagram' /> My Work
            </Link>
          </li>

          <li className={showMenu ? 'nav-item show' : 'nav-item'}>
            <Link
              to='/contact'
              className={
                location === '/contact' ? 'nav-link current' : 'nav-link'
              }>
              <i className='fas fa-phone' /> Contact Me
            </Link>
          </li>
          <li className={showMenu ? 'nav-item show' : 'nav-item'}>
            <a
              href='https://codepen.io/ioanzicu/full/yRGdWp'
              className='nav-link'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fas fa-gamepad' /> Play RGB Game
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
