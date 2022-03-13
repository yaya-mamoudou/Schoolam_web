import { combineReducers } from 'redux';
import { count_reducer } from './count.reducer';

export default combineReducers({
  count: count_reducer,
});
