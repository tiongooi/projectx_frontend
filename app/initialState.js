import testData from './testJobData';

const initialState = {
  allSetJobs: {
    isFetching: false,
    message: null,
    jobs: testData.testJobData,
    daySummaryScreenKey: null
  },
  calendar: {
    selected: new Date().toString()
  },
  removeJob: {
    isRemoving: false,
    message: null,
  }
};

export default initialState;
