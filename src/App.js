import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        {/* <Footer /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
