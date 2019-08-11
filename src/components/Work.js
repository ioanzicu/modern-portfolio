import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'

import img1 from '../img/projects/project1.jpg'
import img2 from '../img/projects/project2.jpg'
import img3 from '../img/projects/project3.jpg'
import img4 from '../img/projects/project4.jpg'
import img5 from '../img/projects/project5.jpg'
import img6 from '../img/projects/project6.jpg'
import img7 from '../img/projects/project7.jpg'

export default class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu location={this.props.location.pathname} className='page' />
        <main id='work'>
          <h1 className='lg-heading'>
            My
            <span className='text-secondary'> Work</span>
          </h1>
          <h2 className='sm-heading'>Check out some of my projects...</h2>

          <div className='projects'>
            <div>
              <div className='details'>
                <img src={img1} alt='' />
                <div className='dtl'>
                  <h3>Yelp Camp</h3>
                  <p>
                    Implemented with HTML5, CSS3, Bootstrap 3, NodeJS, API Maps
                    and MongoDB. Allow to post camp offers around the world.
                    Full Responsive.
                  </p>
                  <a href='https://infinite-fortress-48527.herokuapp.com/'>
                    <i className='fas fa-eye' /> Project{' '}
                  </a>
                  <a href='https://github.com/ioanzicu/yelp-camp'>
                    <i className='fab fa-github' /> Github
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className='details'>
                <img src={img2} alt='' />
                <div className='dtl'>
                  <h3>Chatt App</h3>
                  <p>
                    Implemented with HTML5, CSS3 and NodeJS sockets. Allow
                    people to have a real time conversation in separated rooms.
                    Full Responsive.
                  </p>
                  <a href='https://evening-citadel-63052.herokuapp.com/'>
                    <i className='fas fa-eye' /> Project{' '}
                  </a>
                  <a href='https://github.com/ioanzicu/node-chat-app'>
                    <i className='fab fa-github' /> Github
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className='details'>
                <img src={img3} alt='' />
                <div className='dtl'>
                  <h3>Phones E-Commerce</h3>
                  <p>
                    Implemented with ReactJS, Context API and Pypal API for
                    payment. Allow user to add product to the cart, choose
                    quantity and pay via Pypal.
                  </p>
                  <a href='https://phoneonline.netlify.com/'>
                    <i className='fas fa-eye' /> Project{' '}
                  </a>
                  <a href='https://github.com/ioanzicu/react-phone-e-commerce'>
                    <i className='fab fa-github' /> Github
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className='details'>
                <img src={img4} alt='' />
                <div className='dtl'>
                  <h3>Cart App</h3>
                  <p>
                    Implemented with React JS, Redux, Redux Thunk (async), HTML5
                    and CSS3. This application was made as the solution for an
                    internship position.
                  </p>
                  <a href='https://fathomless-beach-60487.herokuapp.com/'>
                    <i className='fas fa-eye' /> Project{' '}
                  </a>
                  <a href='https://github.com/ioanzicu/redux-cart-app'>
                    <i className='fab fa-github' /> Github
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className='details'>
                <img src={img5} alt='' />
                <div className='dtl'>
                  <h3>Iro's Bicycle Warehouse</h3>
                  <p>
                    A project made using vanilla PHP, MySQL, HTML, CSS. Is a
                    plaform wich allow to post offers of bicycles.
                  </p>
                  <a href='https://github.com/ioanzicu/bicycle-shop'>
                    <i className='fab fa-github' /> Github
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className='details'>
                <img src={img6} alt='' />
                <div className='dtl'>
                  <h3>The Steel Chords</h3>
                  <p>
                    Implemented with HTML5, CSS3. An informative landing page
                    for the guitar shop, including futures, demo and prices.
                    Full Responsive.
                  </p>
                  <a href='https://codepen.io/ioanzicu/full/zQerVK'>
                    <i className='fab fa-codepen' /> Codepen
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className='details'>
                <img src={img7} alt='' />
                <div className='dtl'>
                  <h3>Survey Form</h3>
                  <p>
                    Implemented with HTML5, CSS3. A Survey Form for collecting
                    data about preference in using tools for web development.
                    Full Responsive.
                  </p>
                  <a href='https://codepen.io/ioanzicu/full/yRzMLZ'>
                    <i className='fab fa-codepen' /> Codepen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}
