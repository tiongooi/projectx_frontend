import {
  FETCHING_ALL_TASKS,
  FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAIL,
  CREATING_NEW_TASK,
  CREATE_NEW_TASK_SUCCESS,
  CREATE_NEW_TASK_FAIL,
  REMOVING_TASK,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAIL,
  UPDATE_TASK_SEARCH,
  RESET_TASK_SEARCH
} from '../constants';

import initialState from '../initialState';

const tasksReducer = (state = initialState.tasks, action) => {
  switch(action.type) {
    case FETCHING_ALL_TASKS: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCH_ALL_TASKS_SUCCESS: {
      return {
        ...state,
        allTasks: action.payload,
        isFetching: false
      }
    }
    case FETCH_ALL_TASKS_FAIL: {
      return {
        ...state,
        isFetching: false,
        message: action.payload
      }
    }
    case CREATING_NEW_TASK: {
      return {
        ...state,
        isCreating: true
      }
    }
    case CREATE_NEW_TASK_SUCCESS: {
      return {
        ...state,
        isCreating: false,
        allTasks: action.payload
      }
    }
    case CREATE_NEW_TASK_FAIL: {
      return {
        ...state,
        isCreating: false,
        message: action.payload
      }
    }
    case REMOVING_TASK: {
      return {
        ...state,
        isRemoving: true,
      }
    }
    case REMOVE_TASK_SUCCESS: {
      return {
        ...state,
        isRemoving: false,
        allTasks: action.payload
      }
    }
    case REMOVE_TASK_FAIL: {
      return {
        ...state,
        isRemoving: false,
        message: action.payload
      }
    }
    case UPDATE_TASK_SEARCH: {
      return {
        ...state,
        search: action.payload
      }
    }
    case RESET_TASK_SEARCH: {
      return {
        ...state,
        search: ''
      }
    }
    default: return state
  }
}

export default tasksReducer;
