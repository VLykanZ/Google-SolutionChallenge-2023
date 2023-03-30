import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  bodyPart: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BODY_PART':
      return { ...state, bodyPart: action.payload };
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

export default store;