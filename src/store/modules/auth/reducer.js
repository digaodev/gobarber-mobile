import produce from 'immer';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_FAILURE,
  SIGN_OUT,
} from './actions';

const INITIAL_STATE = {
  token: null,
  isSignedIn: false,
  isLoading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case SIGN_IN_REQUEST: {
        draft.isLoading = true;
        break;
      }
      case SIGN_IN_SUCCESS: {
        draft.token = payload.token;
        draft.isSignedIn = true;
        draft.isLoading = false;
        break;
      }
      case SIGN_FAILURE: {
        draft.isLoading = false;
        break;
      }
      case SIGN_OUT: {
        draft.token = null;
        draft.isSignedIn = false;
        break;
      }
      default:
    }
  });
};
