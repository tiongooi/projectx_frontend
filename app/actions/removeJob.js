import {
  REMOVING_JOB,
  REMOVE_JOB_SUCCESS,
  REMOVE_JOB_FAIL,
  UPDATE_SET_JOBS,
} from '../constants';
import {testJobData} from '../testJobData2';

exports.removeJob = (jobId,NavigationActions,navigation,screenKey) => {
  return (dispatch) => {

    const backAction = NavigationActions.back({
      key: navigation.state.key
    });

    dispatch(removingJob());
    //fetch();
    let res = {
      message: 'ok',
      data: testJobData
    };
    if (res.message === 'ok') {
      dispatch(removeSuccess(res.message))
      dispatch(updateSetJobs(res.data));
      navigation.dispatch(backAction);
    } else {
      dispatch(removeFail(res.message))
    }
  }
}

const removingJob = () => {
  return {
    type: REMOVING_JOB
  }
}

const removeSuccess = (message) => {
  return {
    type: REMOVE_JOB_SUCCESS,
    payload: message
  }
}

const removeFail = (message) => {
  return {
    type: REMOVE_JOB_FAIL,
    payload: message
  }
}

const updateSetJobs = (data) => {
  return {
    type: UPDATE_SET_JOBS,
    payload: data
  }
}
