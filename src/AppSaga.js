import { all } from 'redux-saga/effects';

import { AuthSaga } from './ducks/Auth';

export default function* rootSaga() {
  yield all([
    ...AuthSaga,
  ]);
}
