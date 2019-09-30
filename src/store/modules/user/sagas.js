import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  UPDATE_PROFILE_REQUEST,
  updateProfileSuccess,
  updateProfileFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    let profile = { name, email, avatar_id };

    if (rest.oldPassword) {
      profile = { ...profile, ...rest };
    }

    const { data } = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(data));
  } catch (error) {
    Alert.alert(
      'Falha na atualização',
      'Erro ao atualizar perfil. Confira seus dados',
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
