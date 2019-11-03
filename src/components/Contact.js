import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

const contacts = [
  {
    title: 'Email',
    icon: 'fas fa-at',
    value: 'ioan.zicu94@gmail.com',
    link: 'mailto:ioan.zicu94@gmail.com'
  },
  {
    title: 'Phone',
    icon: 'fas fa-mobile-alt',
    value: '+48 512 701 979',
    link: 'tel:48512701979'
  },
  {
    title: 'Address',
    icon: 'fas fa-map-marked-alt',
    value: 'Poland, Katowice',
    link: ''
  },
  {
    title: 'Whatsapp',
    icon: 'fab fa-whatsapp',
    value: '+48 512 701 979',
    link: 'https://wa.me/48512701979'
  }
]

const Contact = ({ location }) => (
  <>
    <Menu location={location.pathname} className='page' />
    <div>
      <main id='contact'>
        <h1 className='lg-heading'>
          Contact
          <span className='text-secondary'> Me</span>
        </h1>
        <h2 className='sm-heading'>This is how you can reach me...</h2>
        <div className='boxes'>
          {contacts.map(({ link, icon, title, value }) => (
            <div key={title}>
              <a href={link}>
                <span className='text-secondary'>
                  <i className={icon}> {title}: </i>
                </span>{' '}
                {value}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>

    <Footer />
  </>
)

export default Contact
