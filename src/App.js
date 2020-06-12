import React from 'react';
import './App.css';

// components
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Projects from './components/projects/Projects.js';
import Connect from './components/connect/Connect.js';


// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return(
  <Router>
    <Switch>
      <Route exact path='/portfolio2020/about' component={ About } />
      <Route exact path='https://krbrennan.github.io/portfolio2020/projects/' component={ Projects } />
      <Route exact path='/portfolio2020/connect' component={ Connect } />
      <Route exact path='/portfolio2020/' component={ Home } />
    </Switch>
  </Router>
  )
}

export default App;
