import initialState from '../initialState';
import {
  REMOVING_JOB,
  REMOVE_JOB_SUCCESS,
  REMOVE_JOB_FAIL,
  CLEAR_REMOVE_JOB_MESSAGE
} from '../constants';

const removeJobReducer = (state = initialState.removeJob, action) => {
  switch(action.type) {
    case REMOVING_JOB: {
      return {
        ...state,
        isRemoving: true
      }
    }
    case REMOVE_JOB_SUCCESS: {
      return {
        ...state,
        isRemoving: false,
        message: action.payload
      }
    }
    case REMOVE_JOB_FAIL: {
      return {
        ...state,
        isRemoving: false,
        message: 'An error has occured, please try again'
      }
    }
    default: return state
  }
}

export default removeJobReducer;
