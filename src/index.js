import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Event from './components/Events';
import Alumni from './components/Alumni';
import EventRoute from './components/EventRouting';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/events' component={EventRoute} />
      <Route path='/alumni' component={Alumni} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
