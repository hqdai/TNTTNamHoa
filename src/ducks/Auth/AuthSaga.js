import { call, put, takeLatest } from 'redux-saga/effects';
import AuthTypes from './AuthTypes';
import APIRequest from '../../services/APIRequest';

function* loginRequest(action) {
  // try {
  //   const result = yield call(APIRequest.test);
  // } catch (err) {
  console.log('SAGA CALL');
  // }
}

const AuthSaga = [
  takeLatest(AuthTypes.LOGIN_REQUESTED, loginRequest),
];

export default AuthSaga;
