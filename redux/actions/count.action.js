import { INCREMENT, DECREMENT } from '../types';

export const count_action = (option) => async (dispatch) => {
  if (option) {
    dispatch({
      type: INCREMENT,
    });
  } else {
    dispatch({
      type: DECREMENT,
    });
  }
};
