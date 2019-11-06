import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import MainPage from './components/pages/MainPage/MainPage'
import Skills from './components/pages/Skills/Skills'
import About from './components/pages/About/About'
import Work from './components/pages/Work/Work'
import Contact from './components/pages/Contact/Contact'

const App = () => (
  <Route
    render={({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames='fade'>
          <Switch location={location}>
            <Route exact path='/' component={MainPage} />
            <Route path='/skills' component={Skills} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
)

export default App
