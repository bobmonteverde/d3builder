import React from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from '../store';
import Header from '../components/Header';
import Home from '../containers/Home';
import Vizzes from '../containers/Vizzes';
import Builder from '../containers/Builder';

let initialState;

if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__;

  // Tranform into Immutable, but top level plain Object
  Object.keys(initialState).forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });
}

const store = createStore(initialState);

export default () => (
  <Provider store={store}>
    <Router>
      <div className="relative">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/vizzes" component={Vizzes} />
        <Route path="/new" component={Builder} />
      </div>
    </Router>
  </Provider>
);
