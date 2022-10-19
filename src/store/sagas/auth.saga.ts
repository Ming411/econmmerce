import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGNIN,
  SIGNUP,
  SignupAction,
  signupFail,
  signupSuccess,
  SigninAction,
  signinSuccess,
  signinFail
} from '../actions/auth.actions';
import {API} from '../../config';

function* handleSignup(action: SignupAction): any {
  try {
    yield axios.post(`${API}/signup`, action.payload);
    yield put(signupSuccess());
  } catch (error: any) {
    yield put(signupFail(error.response.data.error));
  }
}

function* handleSignin(action: SigninAction): any {
  try {
    let response = yield axios.post(`${API}/signin`, action.payload);
    localStorage.setItem('jwt', JSON.stringify(response.data));
    yield put(signinSuccess());
  } catch (error: any) {
    yield put(signinFail(error.response.data.error));
  }
}

export default function* authSaga() {
  yield takeEvery(SIGNUP, handleSignup);
  yield takeEvery(SIGNIN, handleSignin);
}
