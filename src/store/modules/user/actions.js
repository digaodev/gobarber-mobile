export const UPDATE_PROFILE_REQUEST = '@user/UPDATE_PROFILE_REQUEST';
export const updateProfileRequest = data => ({
  type: UPDATE_PROFILE_REQUEST,
  payload: { data },
});

export const UPDATE_PROFILE_SUCCESS = '@user/UPDATE_PROFILE_SUCCESS';
export const updateProfileSuccess = profile => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: { profile },
});

export const UPDATE_PROFILE_FAILURE = '@user/UPDATE_PROFILE_FAILURE';
export const updateProfileFailure = () => ({
  type: UPDATE_PROFILE_FAILURE,
});
