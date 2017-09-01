
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
    allEmployees: [],
    search: ''
  },
  clients: {
    isFetching: false,
    isRemoving: false,
    message: '',
    allClients: [],
    search: ''
  },
  tasks: {
    isFetching: false,
    isRemoving: false,
    isCreating: false,
    message: '',
    allTasks: [],
    search: ''
  },
  newJob: {
    isInitializing: false,
    basedOnTemplate: 'none',
    date: {},
    message: '',
    client: {},
    task: [],
    employee: [],
    comment: '',
    title: '',
    selectTaskScreenKey: '',
    selectEmployeeScreenKey: '',
    setTitleAndCommentScreenKey: '',
    selectTemplateScreenKey: ''
  },
  templates: {
    isFetching: false,
    isRemoving: false,
    message: '',
    allTemplates: [],
    search: ''
  },
  editSetJob: {
    isUpdating: false,
    jobId: '',
    message: '',
    employee: [],
    task: [],
    comment: [],
    newComment: ''
  }
};

export default initialState;
