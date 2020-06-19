import React from 'react';
import Home from "./Home"
import Clock from './Clock';
import Stopwatch from './Stopwatch'
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Clock">Clock</Link>
        <Link to="/stopWatch">Stopwatch</Link>
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
      </Switch>
    </div>
  );
}

export default App;
