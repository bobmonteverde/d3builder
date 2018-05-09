import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import { reduxFirestore } from 'redux-firestore';
import 'firebase/firestore';

import {
  firebase as fbConfig,
  firestore as fsConfig,
  rrFirebase as rrfbConfig
} from './config';
import rootReducer from './rootReducer.js';
//import sagas from './sagas'

export default (initialState = {}) => {
  // using browser history
  const history = createHistory();

  const middleware = [createSagaMiddleware(), routerMiddleware(history)];

  const enhancers = [];

  firebase.initializeApp(fbConfig);
  const firestore = firebase.firestore();
  firestore.settings(fsConfig);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      //compose(
      reactReduxFirebase(firebase, rrfbConfig),
      reduxFirestore(firebase),
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  return store;
};
