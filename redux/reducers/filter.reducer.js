import { FILTER, FILTER_UNIVERSITIES_SUCCESS } from "../types";

const initialState = {
  filterResult: null,
};

export const filter_reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_UNIVERSITIES_SUCCESS:
      return payload;

    // case CLEAR_PROGRAMS:
    //   return initialState;
    // case LOAD_PROGRAMS_FAIL:
    //   return state;
    default:
      return state;
  }
};
