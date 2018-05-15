import { firebaseReducer as firebase } from 'react-redux-firebase';
import { firestoreReducer as firestore } from 'redux-firestore';

import { view, vizzes } from './modules';

const reducers = {
  firebase,
  firestore,
  view,
  vizzes
};

export default reducers;
