import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;