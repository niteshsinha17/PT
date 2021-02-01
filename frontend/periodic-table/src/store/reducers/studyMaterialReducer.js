import * as actionTypes from "../actions/actionTypes";

const initialState = {
  is_access: false,
};

const updateObject = (state, updatedProperties) => {
  return {
    ...state,
    ...updatedProperties,
  };
};

const studyMaterialReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default studyMaterialReducer;
