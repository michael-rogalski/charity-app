import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Registration from '../Registration';
import Logout from '../Logout';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Registration} />
          <Route path="/wylogowano" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;