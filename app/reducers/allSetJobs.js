import testData from '../testJobData';
import {FETCHING_ALL_SET_JOBS, FETCHING_ALL_SET_JOBS_COMPLETE, FETCHING_ALL_SET_JOBS_FAIL} from '../constants';

const initialState = testData;

const allSetJobs = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_ALL_SET_JOBS: {
      return {
        ...state,
        isFetching: true,
        allSetJobs: null
      }
    }
    case FETCHING_ALL_SET_JOBS_COMPLETE: {
      return {
        ...state,
        isFetching: false,
        allSetJobs: action.payload
      }
    }
    case FETCHING_ALL_SET_JOBS_FAIL: {
      return {
        ...state,
        isFetching: false
      }
    }
    default: return state
  }
}

export default allSetJobs;
