import { combineReducers } from 'redux';
import { universities_reducer } from './universities.reducer';

export default combineReducers({
  universities: universities_reducer,
});
