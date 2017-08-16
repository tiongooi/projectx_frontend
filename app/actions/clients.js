import {
  FETCHING_ALL_CLIENTS,
  FETCHING_ALL_CLIENTS_SUCCESS,
  FETCHING_ALL_CLIENTS_FAIL,
  REMOVING_CLIENT,
  REMOVE_CLIENT_SUCCESS,
  REMOVE_CLIENT_FAIL
} from '../constants';

import {clients} from '../testClientData';
import {clients2} from '../testClientData';

exports.fetchClients = () => {
  return (dispatch) => {
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

exports.removeClient = (clientId,navigation) => {
  return (dispatch) => {
    dispatch(removingClient())
    //fetch...below is for testing only
    const res = {message: 'ok', data:clients2 }
    if (res.message == 'ok') {
      dispatch(removeSuccess(res.data))
      navigation.goBack() 
    } else {
      dispatch(removeFail())
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

const removingClient = () => {
  return {
    type: REMOVING_CLIENT
  }
}

const removeSuccess = (data) => {
  return {
    type: REMOVE_CLIENT_SUCCESS,
    payload: data
  }
}

const removeFail = () => {
  return {
    type: REMOVE_CLIENT_FAIL
  }
}
