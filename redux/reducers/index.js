import { combineReducers } from "redux";
import { universities_reducer } from "./universities.reducer";
import { programs_reducer } from "./programs.reducer";
import { filter_reducer } from "./filter.reducer";

export default combineReducers({
  universities: universities_reducer,
  programs: programs_reducer,
  filter: filter_reducer,
});
