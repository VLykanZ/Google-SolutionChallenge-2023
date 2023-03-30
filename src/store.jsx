import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  bodyPart: '',
  diagnoseScore: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BODY_PART':
      return { ...state, bodyPart: action.payload };
    case 'SET_DIAGNOSE_SCORE':
    return { ...state, diagnoseScore: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export const setBodyPart = (bodyPart) => {
  return { type: 'SET_BODY_PART', payload: bodyPart };
};

export const setDiagnoseScore = (diagnoseScore) => {
  return { type: 'SET_DIAGNOSE_SCORE', payload: diagnoseScore };
};

export default store;