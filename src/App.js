import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import MainPage from "./components/MainPage";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={MainPage} />
                <Route path="/skills" component={Skills} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </React.Fragment>
  );
}

export default App;
