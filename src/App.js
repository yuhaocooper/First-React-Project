import React from 'react';
import Home from "./Home"
import Clock from './Clock';
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Clock">Clock</Link>
      </nav>
      <Switch>
        <route exact path="/">
          <Home/>
        </route>
        <route>
          <Clock path="/clock"/>
        </route>
      </Switch>
    </div>
  );
}

export default App;
