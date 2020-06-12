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
      <Route exact path='/' component={ Home } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/projects' component={ Projects } />
      <Route exact path='/connect' component={ Connect } />
    </Switch>
  </Router>
  )
}

export default App;
