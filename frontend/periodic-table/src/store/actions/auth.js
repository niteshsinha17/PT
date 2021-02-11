import axios from "axios";
import * as actionTypes from "./actionTypes";
import qs from "qs";

export const toggleLoginForm = () => {
  return {
    type: actionTypes.TOGGLE_LOGIN_FORM,
  };
};

export const toggleRegisterForm = () => {
  return {
    type: actionTypes.TOGGLE_REGISTER_FORM,
  };
};

export const closeAll = () => {
  return {
    type: actionTypes.CLOSE_ALL,
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("euToken") || null;
    const userId = localStorage.getItem("euUserId") || null;
    if (token != null && userId != null) {
      const url = "http://127.0.0.1:8000/api/account/login/" + userId;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Token ${token}`,
        },
        url,
      };
      axios(options)
        .then((response) => {
          dispatch(authSuccess(response.data));
        })
        .catch((err) => {
          dispatch(authFail());
        });
    }
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  console.log(authData);
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: authData.token,
    userId: authData.id,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      username: username,
      password: password,
    };
    const url = "http://127.0.0.1:8000/api/account/login/";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(authData),
      url,
    };
    axios(options)
      .then((response) => {
        dispatch(toggleLoginForm());
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        dispatch(authFail());
      });
  };
};

export const register = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      username: username,
      password: password,
    };
    const url = "http://127.0.0.1:8000/api/account/register/";
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(authData),
      url,
    };
    axios(options)
      .then((response) => {
        dispatch(toggleLoginForm());
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        dispatch(authFail());
      });
  };
};
