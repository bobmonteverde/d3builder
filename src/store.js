import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
//import createHistory from 'history/createBrowserHistory';
import {
  routerForBrowser,
  initializeCurrentLocation
} from 'redux-little-router';
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';
//import promiseMiddleware from 'redux-promised'
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import 'firebase/firestore';

import {
  firebase as fbConfig,
  firestore as fsConfig,
  rrFirebase as rrfbConfig
} from './config';
import routes from './routes';
import reducers from './reducers';
import sagas from './sagas';

export default (initialState = {}) => {
  // using browser history
  //const history = createHistory();
  const {
    reducer: router,
    enhancer,
    middleware: routerMiddleware
  } = routerForBrowser({ routes });

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    //thunk.withExtraArgument(getFirestore),
    routerMiddleware,
    sagaMiddleware
    //promiseMiddleware,
  ];

  const enhancers = [enhancer];

  firebase.initializeApp(fbConfig);
  const firestore = firebase.firestore();
  firestore.settings(fsConfig);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    combineReducers({ router, ...reducers }),
    initialState,
    composeEnhancers(
      //compose(
      reactReduxFirebase(firebase, rrfbConfig),
      reduxFirestore(firebase),
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  const initialLocation = store.getState().router;
  if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
  }

  sagaMiddleware.run(sagas, getFirestore);

  return store;
};
