import {combineReducers} from "redux";
import calendar from "./calendar";
import allSetJobs from "./allSetJobs";
import removeJob from "./removeJob";

const rootReducer = combineReducers({
  allSetJobs: allSetJobs,
  calendar: calendar,
  removeJob: removeJob
});

module.exports = rootReducer;
