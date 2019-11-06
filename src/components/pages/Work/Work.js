import React from 'react'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Heading from '../../Heading/Heading'
import './Work.css'

import img1 from '../../../img/projects/project1.jpg'
import img2 from '../../../img/projects/project2.jpg'
import img3 from '../../../img/projects/project3.jpg'
import img4 from '../../../img/projects/project4.jpg'
import img5 from '../../../img/projects/project5.jpg'
import img6 from '../../../img/projects/project6.jpg'
import img7 from '../../../img/projects/project7.jpg'
import img8 from '../../../img/projects/project8.jpg'

const projects = [
  {
    img: img1,
    title: 'Yelp Camp',
    description:
      'Implemented with HTML5, CSS3, Bootstrap 3, NodeJS, API Maps and MongoDB. Allow to post camp offers around the world. Full Responsive.',
    github: 'https://github.com/ioanzicu/yelp-camp',
    previewLink: 'https://infinite-fortress-48527.herokuapp.com/',
    codePen: ''
  },
  {
    img: img2,
    title: 'Burger Builder',
    description:
      'Developed with React, React Router, Redux and Firebase. Allow to build burger and order it. Support also, user authentication.',
    github: 'https://github.com/ioanzicu/react-burger',
    previewLink: 'https://my-burger-ecbd4.firebaseapp.com/checkout',
    codePen: ''
  },
  {
    img: img3,
    title: 'Chatt App',
    description:
      'Implemented with HTML5, CSS3 and NodeJS sockets. Allow people to have a real time conversation in separated rooms. Full Responsive.',
    github: 'https://github.com/ioanzicu/node-chat-app',
    previewLink: 'https://evening-citadel-63052.herokuapp.com/',
    codePen: ''
  },
  {
    img: img4,
    title: 'Phones E-Commerce',
    description:
      'Implemented with ReactJS, Context API and Pypal API for payment. Allow user to add product to the cart, choose quantity and pay via Paypal.',
    github: 'https://github.com/ioanzicu/react-phone-e-commerce',
    previewLink: 'https://phoneonline.netlify.com/',
    codePen: ''
  },
  {
    img: img5,
    title: 'Cart App',
    description:
      'Implemented with React JS, Redux, Redux Thunk (async), HTML5 and CSS3. This application was made as the solution for an internship position.',
    github: 'https://github.com/ioanzicu/redux-cart-app',
    previewLink: 'https://fathomless-beach-60487.herokuapp.com/',
    codePen: ''
  },
  {
    img: img6,
    title: "Iro's Bicycle Warehouse",
    description:
      'A project made using vanilla PHP, MySQL, HTML, CSS. Is a plaform wich allow to post offers of bicycles.',
    github: 'https://github.com/ioanzicu/bicycle-shop',
    previewLink: '',
    codePen: ''
  },
  {
    img: img7,
    title: 'The Steel Chords',
    description:
      'Implemented with HTML5, CSS3. An informative landing page for the guitar shop, including futures, demo and prices. Full Responsive.',
    github: '',
    previewLink: '',
    codePen: 'https://codepen.io/ioanzicu/full/zQerVK'
  },
  {
    img: img8,
    title: 'Survey Form',
    description:
      'Implemented with HTML5, CSS3. A Survey Form for collecting data about preference in using tools for web development. Full Responsive.',
    github: '',
    previewLink: '',
    codePen: 'https://codepen.io/ioanzicu/full/yRzMLZ'
  }
]

const Project = ({ img, title, description, github, previewLink, codePen }) => (
  <div className='project'>
    <img src={img} alt={title} />
    <div className='details'>
      <h3>{title}</h3>
      <p>{description}</p>
      {previewLink && (
        <a href={previewLink}>
          <i className='fas fa-eye' /> Project
        </a>
      )}
      {github && (
        <a href={github}>
          <i className='fab fa-github' /> Github
        </a>
      )}
      {codePen && (
        <a href={codePen}>
          <i className='fab fa-codepen' /> Codepen
        </a>
      )}
    </div>
  </div>
)

const Work = ({ location }) => (
  <>
    <Menu location={location.pathname} className='page' />
    <main id='work'>
      <Heading
        title='My'
        secondaryTitle='Work'
        subtitle='Check out some of my projects...'
      />

      <div className='projects'>
        {projects.map(
          ({ img, title, description, github, previewLink, codePen }) => (
            <Project
              key={title}
              img={img}
              title={title}
              description={description}
              github={github}
              previewLink={previewLink}
              codePen={codePen}
            />
          )
        )}
      </div>
    </main>
    <Footer />
  </>
)

export default Work
