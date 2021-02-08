import * as actionTypes from "../actions/actionTypes";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is this questions?",
      options: [
        { id: 1, option: "select me" },
        { id: 2, option: "select me" },
        { id: 3, option: "select me" },
        { id: 4, option: "select me" },
      ],
      selcted: null,
    },
    {
      id: 2,
      question: "What is this questions?",
      options: [
        { id: 1, option: "select me" },
        { id: 2, option: "select me" },
        { id: 3, option: "select me" },
        { id: 4, option: "select me" },
      ],
      selcted: null,
    },
    {
      id: 3,
      question: "What is this questions?",
      options: [
        { id: 1, option: "select me" },
        { id: 2, option: "select me" },
        { id: 3, option: "select me" },
        { id: 4, option: "select me" },
      ],
      selcted: null,
    },
    {
      id: 4,
      question: "What is this questions?",
      options: [
        { id: 1, option: "select me" },
        { id: 2, option: "select me" },
        { id: 3, option: "select me" },
        { id: 4, option: "select me" },
      ],
      selcted: null,
    },
  ],
  current_question: 1,
  total_question: 3,
  answers: [
    { correct: true },
    { correct: false, ans: 2, reason: "falna reason" },
    { correct: true },
  ],
  result: false,
};

const updateObject = (state, updatedProperties) => {
  return {
    ...state,
    ...updatedProperties,
  };
};

const quizeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default quizeReducer;
