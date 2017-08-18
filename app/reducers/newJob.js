import {
  SET_NEW_JOB_CLIENT,
  SET_NEW_JOB_TASK,
  UNSET_NEW_JOB_TASK,
  SET_NEW_JOB_EMPLOYEE,
  INITIATING_NEW_JOB,
  INITIATE_NEW_JOB_SUCCESS,
  INITIATE_NEW_JOB_FAIL
} from '../constants';

import initialState from '../initialState';

const newJobReducer = (state = initialState.newJob, action) => {
  switch(action.type) {
    case SET_NEW_JOB_CLIENT: {
      return {
        ...state,
        client: action.payload
      }
    }
    case SET_NEW_JOB_TASK: {
      let {task} = state
      return {
        ...state,
        task: [...task, action.payload]
      }
    }
    case UNSET_NEW_JOB_TASK: {
      let {payload} = action
      return {
        ...state,
        task: [...payload]
      }
    }
    case SET_NEW_JOB_EMPLOYEE: {
      return {
        ...state,
        employee: push(action.payload)
      }
    }
    case INITIATING_NEW_JOB: {
      return {
        ...state,
        isInitiating: true
      }
    }
    case INITIATE_NEW_JOB_SUCCESS: {
      return {
        ...state,
        isInitiating: false
      }
    }
    case INITIATE_NEW_JOB_FAIL: {
      return {
        ...state,
        isInitiating: false
      }
    }
    default: return state
  }
}

export default newJobReducer;
