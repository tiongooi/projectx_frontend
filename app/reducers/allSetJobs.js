import initialState from '../initialState';
import {FETCHING_ALL_SET_JOBS,
        FETCHING_ALL_SET_JOBS_COMPLETE,
        FETCHING_ALL_SET_JOBS_FAIL,
        UPDATE_SET_JOBS
        } from '../constants';

const allSetJobs = (state = initialState.allSetJobs, action) => {
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
    case UPDATE_SET_JOBS: {
      return {
        ...state,
        jobs: action.payload
      }
    }
    default: return state
  }
}

export default allSetJobs;
