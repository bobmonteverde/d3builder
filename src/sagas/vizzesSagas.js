import { takeLatest, fork, put } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import {
  constants as vizzesConstants,
  actions as vizzesActions
} from '../modules/vizzes';
import { actions as viewActions } from '../modules/view';

//const log = (...args) => { console.log.apply(console, args); return args[args.length - 1] }

function* createNewVizSaga(getFirestore, { payload }) {
  try {
    const firestore = yield getFirestore();
    const now = firestore.FieldValue.serverTimestamp();
    const vizdoc = yield firestore.add('vizzes', {
      title: payload.title,
      createdBy: 'users/' + payload.uid,
      html: '',
      css: '',
      js: '',
      createdTime: now,
      lastUpdate: now
    });
    yield put(viewActions.setShowNewVizForm(false));
    yield put(vizzesActions.createNewVizComplete());
    yield put(push(`/vizzes/${vizdoc.id}`));
  } catch (err) {
    console.log('Saga Error', err);
  }
}

function* watchVizzesEvents(getFirestore) {
  yield takeLatest(
    vizzesConstants.CREATE_NEW_VIZ,
    createNewVizSaga,
    getFirestore
  );
}

export const vizzesSagas = getFirestore => [
  fork(watchVizzesEvents, getFirestore)
];
