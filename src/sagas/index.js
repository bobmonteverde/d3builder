import { vizzesSagas } from './vizzesSagas';

export default function* sagas(getFirestore) {
  yield [...vizzesSagas(getFirestore)];
}
