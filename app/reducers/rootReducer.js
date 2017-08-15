import {combineReducers} from "redux";
import calendarReducer from "./calendar";
import allSetJobsReducer from "./allSetJobs";
import removeJobReducer from "./removeJob";
import employeesReducer from "./employees";
import clientsReducer from "./clients";

const rootReducer = combineReducers({
  allSetJobs: allSetJobsReducer,
  calendar: calendarReducer,
  removeJob: removeJobReducer,
  employees: employeesReducer,
  clients: clientsReducer
});

module.exports = rootReducer;
