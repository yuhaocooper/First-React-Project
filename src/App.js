import React from 'react';
import Home from "./Home"
import Clock from './Clock';
import Stopwatch from './Stopwatch'
import Practice from './Practice'
import {Switch, Route, Link} from 'react-router-dom'
import './styles.css'

function App() {
  return (
    <div>
      <nav className='Nav'>
        <Link to="/" className="Links">Home</Link>
        <Link to ="/Clock" className="Links">Clock</Link>
        <Link to="/stopWatch" className="Links">Stopwatch</Link>
        <Link to="/Practice" className="Links">Practice</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path ="/clock">
          <Clock/>
        </Route>
        <Route path="/Stopwatch">
          <Stopwatch/>
        </Route>
        <Route path="/Practice">
          <Practice/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
