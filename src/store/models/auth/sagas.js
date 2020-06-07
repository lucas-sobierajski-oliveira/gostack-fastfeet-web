import { all, takeLatest, call, put } from 'redux-saga/effects';
import history from '~/services/history';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/delivery');
  } catch (err) {
    yield put(signFailure());
  }
}

function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
