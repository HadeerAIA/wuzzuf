import { combineReducers } from "redux";
import getJobs from "./reducers/getJibAppliction";

export default combineReducers({
  posts: getJobs
});
