import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Pizza from './Components/Pizza';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="pizza" component={Pizza} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
