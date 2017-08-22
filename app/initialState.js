
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
    message: '',
  },
  employees: {
    isFetching: false,
    isRemoving: false,
    message: '',
    allEmployees: []
  },
  clients: {
    isFetching: false,
    isRemoving: false,
    message: '',
    allClients: []
  },
  tasks: {
    isFetching: false,
    isRemoving: false,
    isCreating: false,
    message: '',
    allTasks: []
  },
  newJob: {
    isInitializing: false,
    message: '',
    client: {},
    task: [],
    employee: [],
    comment: '',
    title: '',
    selectTaskScreenKey: '',
    selectEmployeeScreenKey: '',
    setTitleAndCommentScreenKey: ''
  }
};

export default initialState;
