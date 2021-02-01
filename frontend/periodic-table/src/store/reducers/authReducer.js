import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  is_authenticated: false,
  showLoginForm: false,
  showRegisterForm: false,
};

const updateObject = (state, updatedProperties) => {
  return {
    ...state,
    ...updatedProperties,
  };
};

const authSuccess = (state, action) => {
  localStorage.setItem("euToken", action.token);
  localStorage.setItem("euUserId", action.userId);
  return updateObject(state, {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false,
    is_authenticated: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
    error: action.err,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, { error: null, loading: true });
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.CHANGE_LOGIN_FORM_VIEW:
      return updateObject(state, {
        showRegisterForm: false,
        showLoginForm: !state.showLoginForm,
      });
    case actionTypes.CHANGE_REGISTER_FORM_VIEW:
      return updateObject(state, {
        showRegisterForm: !state.showRegisterForm,
        showLoginForm: false,
      });
    default:
      return state;
  }
};

export default reducer;
