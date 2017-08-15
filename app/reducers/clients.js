import {
  FETCHING_ALL_CLIENTS,
  FETCHING_ALL_CLIENTS_SUCCESS,
  FETCHING_ALL_CLIENTS_FAIL,
  REMOVING_CLIENT,
  REMOVE_CLIENT_SUCCESS,
  REMOVE_CLIENT_FAIL
} from '../constants';

import initialState from '../initialState';

const clientsReducer = (state = initialState.clients, action) => {
  switch(action.type) {
    case FETCHING_ALL_CLIENTS: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCHING_ALL_CLIENTS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        allClients: action.payload
      }
    }
    case FETCHING_ALL_CLIENTS_FAIL: {
      return {
        ...state,
        isFetching: false,
        message: 'An error has occured, please try again'
      }
    }
    case REMOVING_CLIENT: {
      return {
        ...state,
        isRemoving: true,
      }
    }
    case REMOVE_CLIENT_SUCCESS: {
      return {
        ...state,
        isRemoving: false,
        allClients: action.payload
      }
    }
    case REMOVE_CLIENT_FAIL: {
      return {
        ...state,
        isRemoving: false,
        message: 'An error has occured, please try again'
      }
    }
    default: return state
  }
}

export default clientsReducer;
