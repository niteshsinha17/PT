import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loaded: false,
  s_block: null,
  p_block: null,
  d_block: null,
  f_block: null,
  selectedElement: false,
  element: null,
  error: false,
  errMsg: null,
};

const updateObject = (state, updatedProperties) => {
  return {
    ...state,
    ...updatedProperties,
  };
};

const tableLoadSuccess = (state, action) => {
  return updateObject(state, {
    loaded: true,
    error: false,
    s_block: action.s_block,
    p_block: action.p_block,
    d_block: action.d_block,
    f_block: action.f_block,
  });
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TABLE_LOAD_SUCCESS:
      return tableLoadSuccess(state, action);
    case actionTypes.TABLE_LOAD_FAILED:
      return updateObject({ state, error: true });
    case actionTypes.SHOW_ELEMENT:
      return updateObject(state, {
        selectedElement: true,
        element: action.element,
        error: false,
      });
    case actionTypes.HIDE_ELEMENT:
      return updateObject(state, {
        selectedElement: false,
        element: null,
        error: false,
        errMsg: null,
      });
    case actionTypes.SHOW_ELEMENT_FAIL:
      return updateObject(state, {
        error: true,
        errMsg: action.err_msg,
        selectedElement: true,
      });
    default:
      return state;
  }
};

export default tableReducer;
