import initialState from '../initialState';
import {FETCHING_ALL_SET_JOBS,
        FETCHING_ALL_SET_JOBS_COMPLETE,
        FETCHING_ALL_SET_JOBS_FAIL,
        UPDATE_SET_JOBS,
        UPDATE_SCREEN_KEY
        } from '../constants';

const allSetJobs = (state = initialState.allSetJobs, action) => {
  switch(action.type) {
    case FETCHING_ALL_SET_JOBS: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case FETCHING_ALL_SET_JOBS_COMPLETE: {
      return {
        ...state,
        isFetching: false,
        jobs: action.payload
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
        jobs: [...action.payload]
      }
    }
    case UPDATE_SCREEN_KEY: {
      return {
        ...state,
        daySummaryScreenKey: action.payload
      }
    }
    default: return state
  }
}

export default allSetJobs;
