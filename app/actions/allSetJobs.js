import {
        FETCHING_ALL_SET_JOBS,
        FETCHING_ALL_SET_JOBS_COMPLETE,
        FETCHING_ALL_SET_JOBS_FAIL,
        UPDATE_SCREEN_KEY
        } from '../constants';

import {testJobData} from '../testJobData';

exports.fetchJobs = () => {
  return (dispatch) => {
    dispatch(gettingJobs())
    //fetch()...below is for testing only
    const res = {message: 'ok', data:testJobData}
    if (res.message == 'ok') {
      dispatch(gotJobs(res.data))
    } else {
      dispatch(getJobsFailed())
    }
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

const gotJobs = (data) => {
  return {
    type: FETCHING_ALL_SET_JOBS_COMPLETE,
    payload: data
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
