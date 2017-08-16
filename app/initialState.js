
const initialState = {
  allSetJobs: {
    isFetching: false,
    message: null,
    jobs: [],
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
    allEmployees: []
  },
  clients: {
    isFetching: false,
    isRemoving: false,
    message: null,
    allClients: []
  }
};

export default initialState;
