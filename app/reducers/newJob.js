import {
  UPDATE_SELECT_TEMPLATE_SCREEN_KEY,
  SET_NEW_JOB_CLIENT,
  SET_NEW_JOB_TASK,
  UNSET_NEW_JOB_TASK,
  UPDATE_SELECT_TASK_SCREEN_KEY,
  SET_NEW_JOB_EMPLOYEE,
  UNSET_NEW_JOB_EMPLOYEE,
  UPDATE_SELECT_EMPLOYEE_SCREEN_KEY,
  SET_NEW_JOB_TITLE,
  SET_NEW_JOB_COMMENT,
  UPDATE_SET_TITLE_AND_COMMENT_SCREEN_KEY,
  INITIATING_NEW_JOB,
  INITIATE_NEW_JOB_SUCCESS,
  INITIATE_NEW_JOB_FAIL,
  RESET_NEW_JOB_DATA,
  POPULATE_NEW_JOB_FIELDS
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
      return {
        ...state,
        task: [...state.task, action.payload]
      }
    }
    case UNSET_NEW_JOB_TASK: {
      return {
        ...state,
        task: [...action.payload]
      }
    }
    case SET_NEW_JOB_EMPLOYEE: {
      return {
        ...state,
        employee: [...state.employee, action.payload]
      }
    }
    case UNSET_NEW_JOB_EMPLOYEE: {
      return {
        ...state,
        employee: [...action.payload]
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
    case SET_NEW_JOB_TITLE: {
      return {
        ...state,
        title: action.payload
      }
    }
    case SET_NEW_JOB_COMMENT: {
      return {
        ...state,
        comment: action.payload
      }
    }
    case UPDATE_SELECT_TASK_SCREEN_KEY: {
      return {
        ...state,
        selectTaskScreenKey: action.payload
      }
    }
    case UPDATE_SELECT_EMPLOYEE_SCREEN_KEY: {
      return {
        ...state,
        selectEmployeeScreenKey: action.payload
      }
    }
    case UPDATE_SET_TITLE_AND_COMMENT_SCREEN_KEY: {
      return {
        ...state,
        setTitleAndCommentScreenKey: action.payload
      }
    }
    case UPDATE_SELECT_TEMPLATE_SCREEN_KEY: {
      return {
        ...state,
        selectTemplateScreenKey: action.payload
      }
    }
    case RESET_NEW_JOB_DATA: {
      return {
        ...state,
        isInitializing: false,
        basedOnTemplate: '',
        date: {},
        message: '',
        client: {},
        task: [],
        employee: [],
        comment: '',
        title: '',
        selectTemplateScreenKey: '',
        selectTaskScreenKey: '',
        selectEmployeeScreenKey: '',
        setTitleAndCommentScreenKey: ''
      }
    }
    case POPULATE_NEW_JOB_FIELDS: {
      return {
        ...state,
        client: {...action.payload.client},
        task: [...action.payload.task],
        employee: [...state.employee, ...action.payload.employee],
        comment: action.payload.comment,
        title: action.payload.title,
        basedOnTemplate: action.payload.id
      }
    }
    default: return state
  }
}

export default newJobReducer;
