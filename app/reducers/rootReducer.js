import {combineReducers} from "redux";
import calendarReducer from "./calendar";
import allSetJobsReducer from "./allSetJobs";
import removeJobReducer from "./removeJob";
import employeesReducer from "./employees";
import clientsReducer from "./clients";
import newJobReducer from "./newJob";
import tasksReducer from "./tasks";
import templatesReducer from "./templates";

const rootReducer = combineReducers({
  allSetJobs: allSetJobsReducer,
  calendar: calendarReducer,
  removeJob: removeJobReducer,
  employees: employeesReducer,
  clients: clientsReducer,
  newJob: newJobReducer,
  tasks: tasksReducer,
  templates: templatesReducer
});

module.exports = rootReducer;
