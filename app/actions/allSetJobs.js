import {
        FETCHING_ALL_SET_JOBS,
        FETCHING_ALL_SET_JOBS_COMPLETE,
        FETCHING_ALL_SET_JOBS_FAIL
        } from '../constants';

const export fetchJob = () => {
  return (dispatch) => {
    dispatch(gettingJobs());
    //fetch()...api
    //response.json
    dispatch(gotJobs(res));
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
