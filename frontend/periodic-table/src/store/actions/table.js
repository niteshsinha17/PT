import axios from "axios";
import * as actionTypes from "./actionTypes";

export const tableLoadSuccess = (data) => {
  let s_block, p_block, d_block, f_block;
  data.forEach((block) => {
    switch (block.name) {
      case "s":
        s_block = block.groups;
        break;
      case "p":
        p_block = block.groups;
        break;
      case "d":
        d_block = block.groups;
        break;
      case "f":
        f_block = block.groups;
        break;

      default:
        break;
    }
  });

  return {
    type: actionTypes.TABLE_LOAD_SUCCESS,
    s_block: s_block,
    p_block: p_block,
    d_block: d_block,
    f_block: f_block,
  };
};

export const tableLoadFailed = () => {
  return {
    error: true,
  };
};

export const tableLoad = (data) => {
  return (dispatch) => {
    if (data.loaded === false) {
      const url = "http://127.0.0.1:8000/api/element/all/";
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url,
      };
      axios(options)
        .then((response) => {
          dispatch(tableLoadSuccess(response.data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(tableLoadFailed());
        });
    }
  };
};

export const showElementSuccess = (data) => {
  return {
    type: actionTypes.SHOW_ELEMENT,
    element: data,
  };
};

export const removeElement = () => {
  return {
    type: actionTypes.HIDE_ELEMENT,
  };
};

export const showElementFail = (err_msg) => {
  return {
    type: actionTypes.SHOW_ELEMENT_FAIL,
    err_msg:err_msg
  };
};

export const showElement = (payload) => {
  return (dispatch) => {
    const token = localStorage.getItem("euToken") || null;
    const url = "http://127.0.0.1:8000/api/element/" + payload.atomicNumber;
    const options = {
      method: "GET",
      body: {
        HTTP_AUTHORIZATION: `Token ${token}`,
      },
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url,
    };
    axios(options)
      .then((response) => {
        dispatch(showElementSuccess(response.data));
      })
      .catch((err) => {
        console.log(err.response);
        let err_msg = err.response.data.detail
        dispatch(showElementFail(err_msg));
      });
  };
};
