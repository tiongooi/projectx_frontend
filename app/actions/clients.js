import {
  FETCHING_ALL_CLIENTS,
  FETCHING_ALL_CLIENTS_SUCCESS,
  FETCHING_ALL_CLIENTS_FAIL,
  REMOVING_CLIENT,
  REMOVE_CLIENT_SUCCESS,
  REMOVE_CLIENT_FAIL
} from '../constants';

import {clients} from '../testClientData';

exports.fetchClients = () => {
  return (dispatch) => {
    console.log('asdasd')
    dispatch(fetchingClients())
    //fetch.. below is for testing only
    const res = {message: 'ok', data: clients}
    if (res.message == 'ok') {
      dispatch(fetchSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

const fetchingClients = () => {
  return {
    type: FETCHING_ALL_CLIENTS
  }
}

const fetchSuccess = (data) => {
  return {
    type: FETCHING_ALL_CLIENTS_SUCCESS,
    payload: data
  }
}

const fetchFail = () => {
  return {
    type: FETCHING_ALL_CLIENTS_FAIL
  }
}
