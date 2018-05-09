import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { reduxFirestore as firestore } from 'redux-firestore';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  firebase,
  firestore,
  routing
});

export default rootReducer;
