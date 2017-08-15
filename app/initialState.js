import {testJobData} from './testJobData';
import {employees} from './testEmployeeData';
import {clients} from './testClientData';

const initialState = {
  allSetJobs: {
    isFetching: false,
    message: null,
    jobs: testJobData,
    daySummaryScreenKey: null
  },
  calendar: {
    selected: new Date().toString()
  },
  removeJob: {
    isRemoving: false,
    message: null,
  },
  employees: {
    isFetching: false,
    isRemoving: false,
    message: null,
    allEmployees: employees
  },
  clients: {
    isFetching: false,
    isRemoving: false,
    message: null,
    allClients: clients
  }
};

export default initialState;
