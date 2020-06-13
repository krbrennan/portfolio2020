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
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/about' component={ About } />
      <Route exact path='/projects' component={ Projects } />
      <Route exact path='/portfolio2020/connect' component={ Connect } />
      <Route exact path='/' component={ Home } />
    </Switch>
  </Router>
  )
}

export default App;
