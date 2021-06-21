import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Event from './components/Events';
import EventRoute from './components/EventRouting';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/events' component={EventRoute} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
