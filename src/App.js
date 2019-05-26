import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import MainPage from "./components/MainPage";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Footer />
      </Switch>
    </React.Fragment>
  );
}

export default App;
