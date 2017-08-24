import {
  FETCHING_ALL_TEMPLATES,
  FETCH_ALL_TEMPLATES_SUCCESS,
  FETCH_ALL_TEMPLATES_FAIL
} from '../constants'

import initialState from '../initialState'

const templatesReducer = (state = initialState.templates, action) => {
  switch(action.type) {
    case FETCHING_ALL_TEMPLATES: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCH_ALL_TEMPLATES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        allTemplates: action.payload
      }
    }
    case FETCH_ALL_TEMPLATES_FAIL: {
      return {
        ...state,
        isFetching: false,
        message: action.payload
      }
    }
    default: return state
  }
}

export default templatesReducer;
