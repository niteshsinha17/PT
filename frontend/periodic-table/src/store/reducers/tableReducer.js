import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loaded: false,
  s_block: null,
  p_block: null,
  d_block: null,
  f_block: null,
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
      break;
    default:
      return state;
  }
};

export default tableReducer;
