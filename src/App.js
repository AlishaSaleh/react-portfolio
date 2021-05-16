import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <>
      <Nav />
      <Wrapper>
        <Switch>
      <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
      </Wrapper>
      <Footer />
      </>
    </Router>
  );
}

export default App;
