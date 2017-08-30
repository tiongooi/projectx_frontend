import {
  POPULATE_EDIT_JOB_EMPLOYEE,
  POPULATE_EDIT_JOB_TASK,
  RESET_EDIT_JOB_FIELDS,
  SET_EDIT_JOB_EMPLOYEE,
  UNSET_EDIT_JOB_EMPLOYEE,
  SET_EDIT_JOB_TASK,
  UNSET_EDIT_JOB_TASK,
  UPDATING_EDIT_JOB,
  UPDATE_EDIT_JOB_SUCCESS,
  UPDATE_EDIT_JOB_FAIL
} from '../constants'

import initialState from '../initialState'

const editSetJobReducer = (state = initialState.editSetJob, action) => {
  switch(action.type) {
    case SET_EDIT_JOB_EMPLOYEE: {
      return {
        ...state,
        employee: [...state.employee, action.payload]
      }
    }
    case UNSET_EDIT_JOB_EMPLOYEE: {
      return {
        ...state,
        employee: [...action.payload]
      }
    }
    case SET_EDIT_JOB_TASK: {
      return {
        ...state,
        task: [...state.task, action.payload]
      }
    }
    case UNSET_EDIT_JOB_TASK: {
      return {
        ...state,
        task: [...action.payload]
      }
    }
    case UPDATING_EDIT_JOB: {
      return {
        ...state,
        isUpdating: true
      }
    }
    case UPDATE_EDIT_JOB_SUCCESS: {
      return {
        ...state,
      }
    }
    case UPDATE_EDIT_JOB_FAIL: {
      return {
        ...state,
      }
    }
    case POPULATE_EDIT_JOB_EMPLOYEE: {
      return {
        ...state,
        id: action.payload.id,
        employee: [...action.payload.employee]
      }
    }
    case POPULATE_EDIT_JOB_TASK: {
      return {
        ...state,
        id: action.payload.id,
        task: [...action.payload.task]
      }
    }
    case RESET_EDIT_JOB_FIELDS: {
      return {
        ...state,
        jobId: '',
        employee: [],
        task: [],
        message: '',
        isUpdating: false
      }
    }
    default: return state
  }
}

export default editSetJobReducer ;
