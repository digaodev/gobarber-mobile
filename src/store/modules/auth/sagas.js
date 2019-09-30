import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  SIGN_IN_REQUEST,
  signInSuccess,
  SIGN_UP_REQUEST,
  signFailure,
  SIGN_OUT,
} from './actions';

export function setAuthToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'Usuário não pode ser prestador de serviços',
      );
    } else {
      yield put(signInSuccess(token, user));

      // history.push('/dashboard');
    }
  } catch (error) {
    Alert.alert('Falha na autenticação', 'Email ou senha inválidos');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    // history.push('/');
  } catch (error) {
    Alert.alert('Falha no cadastro', 'Verifique seus dados');

    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setAuthToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
  takeLatest(SIGN_OUT, signOut),
]);
