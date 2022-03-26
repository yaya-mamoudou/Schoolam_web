import { LOAD_UNIVERSITIES_FAIL, LOAD_UNIVERSITIES_SUCCESS } from '../types';

const initialState = {
  university: null,
};

export const universities_reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_UNIVERSITIES_SUCCESS:
      return payload;
    case LOAD_UNIVERSITIES_FAIL:
      return state;
    default:
      return state;
  }
};
