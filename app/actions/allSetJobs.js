import {
        FETCHING_ALL_SET_JOBS,
        FETCHING_ALL_SET_JOBS_COMPLETE,
        FETCHING_ALL_SET_JOBS_FAIL,
        UPDATE_SCREEN_KEY
        } from '../constants';

exports.fetchJob = () => {
  return (dispatch) => {
    dispatch(gettingJobs());
    //fetch()...api
    //response.json
    dispatch(gotJobs(res));
  }
}

exports.updateScreenKey = (key) => {
  return (dispatch) => {
    dispatch(updateKey(key));
  }
}

const gettingJobs = () => {
  return {
    type: FETCHING_ALL_SET_JOBS
  }
}

const gotJobs = () => {
  return {
    type: FETCHING_ALL_SET_JOBS_COMPLETE
  }
}

const getJobsFailed = () => {
  return {
    type: FETCHING_ALL_SET_JOBS_FAIL
  }
}

const updateKey = (key) => {
  return {
    type: UPDATE_SCREEN_KEY,
    payload: key
  }
}
