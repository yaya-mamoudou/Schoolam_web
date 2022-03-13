import { INCREMENT, DECREMENT } from '../types';

export const count_reducer = (state = 0, action) => {
  const type = action.type;

  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
