import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu location={this.props.location.pathname} className='page' />
        <div>
          <main id='contact'>
            <h1 className='lg-heading'>
              Contact
              <span className='text-secondary'> Me</span>
            </h1>
            <h2 className='sm-heading'>This is how you can reach me...</h2>
            <div className='boxes'>
              <div>
                <a href='mailto:ioan.zicu94@gmail.com'>
                  <span className='text-secondary'>
                    <i className='fas fa-at'> Email: </i>
                  </span>{' '}
                  ioan.zicu94@gmail.com
                </a>
              </div>
              <div>
                <a href='tel:48512701979'>
                  <span className='text-secondary'>
                    <i className='fas fa-mobile-alt'> Phone: </i>
                  </span>{' '}
                  +48 512 701 979
                </a>
              </div>
              <div>
                <span className='text-secondary'>
                  <i className='fas fa-map-marked-alt'> Address: </i>
                </span>{' '}
                Poland, Katowice
              </div>
              <div>
                <a href='https://wa.me/48512701979'>
                  <span className='text-secondary'>
                    <b>
                      <i className='fab fa-whatsapp'> Whatsapp: </i>
                    </b>
                  </span>{' '}
                  +48 512 701 979
                </a>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </React.Fragment>
    )
  }
}
