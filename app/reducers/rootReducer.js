import {combineReducers} from "redux";
import calendar from "./calendar";
import allSetJobs from "./allSetJobs";

const rootReducer = combineReducers({
  allSetJobs: allSetJobs,
  calendar: calendar
});

module.exports = rootReducer;
