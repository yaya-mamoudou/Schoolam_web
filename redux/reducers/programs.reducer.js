import { LOAD_PROGRAMS_FAIL, LOAD_PROGRAMS_SUCCESS, CLEAR_PROGRAMS } from '../types';

const initialState = {
  programs: null,
};

export const programs_reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PROGRAMS_SUCCESS:
      return payload;
    case CLEAR_PROGRAMS:
      return initialState;
    case LOAD_PROGRAMS_FAIL:
      return state;
    default:
      return state;
  }
};
