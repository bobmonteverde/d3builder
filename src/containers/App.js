import React from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { Fragment } from 'redux-little-router';

import createStore from '../store';
import Header from '../containers/Header';
import Home from '../containers/Home';
import Vizzes from '../containers/Vizzes';
import Builder from '../containers/Builder';
import Overlay from '../containers/Overlay';

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
    <Fragment forRoute="/">
      <React.Fragment>
        <Header />

        <Fragment forRoute="/">
          <Home />
        </Fragment>

        <Fragment forRoute="/vizzes">
          <React.Fragment>
            <Fragment forRoute="/:vizid">
              <Builder />
            </Fragment>

            <Fragment forRoute="/">
              <Vizzes />
            </Fragment>
          </React.Fragment>
        </Fragment>

        <Overlay />
      </React.Fragment>
    </Fragment>
  </Provider>
);
