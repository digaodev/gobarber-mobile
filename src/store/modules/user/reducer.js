import produce from 'immer';

import { SIGN_IN_SUCCESS, SIGN_OUT } from '../auth/actions';
import { UPDATE_PROFILE_SUCCESS } from './actions';

const INITIAL_STATE = {
  profile: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = payload.user;
        break;
      }

      case UPDATE_PROFILE_SUCCESS: {
        draft.profile = payload.profile;
        break;
      }

      case SIGN_OUT: {
        draft.profile = null;
        break;
      }

      default:
    }
  });
};
