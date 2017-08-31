import {
  POPULATE_EDIT_JOB_EMPLOYEE,
  POPULATE_EDIT_JOB_TASK,
  POPULATE_EDIT_JOB_COMMENT,
  WRITE_COMMENT,
  CLEAR_NEW_COMMENT_FIELD,
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
    case POPULATE_EDIT_JOB_COMMENT: {
      return {
        ...state,
        id: action.payload.id,
        comment: [...action.payload.comment]
      }
    }
    case WRITE_COMMENT: {
      return {
        ...state,
        newComment: action.payload
      }
    }
    case CLEAR_NEW_COMMENT_FIELD: {
      return {
        ...state,
        newComment: ''
      }
    }
    case RESET_EDIT_JOB_FIELDS: {
      return {
        ...state,
        jobId: '',
        employee: [],
        task: [],
        comment: [],
        message: '',
        newComment: '',
        isUpdating: false
      }
    }
    default: return state
  }
}

export default editSetJobReducer ;
