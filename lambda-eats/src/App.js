import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
