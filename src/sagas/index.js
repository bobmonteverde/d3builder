import { all } from 'redux-saga/effects';
import { vizzesSagas } from './vizzesSagas';

export default function* sagas(getFirestore) {
  yield all([...vizzesSagas(getFirestore)]);
}
