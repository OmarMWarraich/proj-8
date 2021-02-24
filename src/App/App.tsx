import React from 'react';
import './App.css';
import './hover.css'
// components
import LaunchFunction from '../components/Launch/app'
import LaunchDetFunction from '../components/LaunchDet/app'
import Navbar from '../components/navbar/navbar'
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/main';

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <Switch>
          {/* main root path */}
          <Route exact path='/' component={Home} />
          <Route  path='/launches' component={LaunchFunction} />
          {/* indiviual connection  to launches*/}
          <Route path='/launch/:id' component={LaunchDetFunction} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
