import { combineReducers } from 'redux';
import { universities_reducer } from './universities.reducer';
import { programs_reducer } from './programs.reducer';

export default combineReducers({
  universities: universities_reducer,
  programs: programs_reducer,
});
