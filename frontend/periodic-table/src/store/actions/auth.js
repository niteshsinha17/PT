import axios from "axios";
import * as actionTypes from "./actionTypes";
import qs from "qs";

export const loginFormHandler = () => {
  return {
    type: actionTypes.CHANGE_LOGIN_FORM_VIEW,
  };
};

export const registerFormHandler = () => {
  return {
    type: actionTypes.CHANGE_REGISTER_FORM_VIEW,
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
        body: {
          HTTP_AUTHORIZATION: `Token ${token}`,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          // HTTP_AUTHORIZATION: `Token ${token}`,
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
        dispatch(loginFormHandler());
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        dispatch(authFail());
      });
  };
};
