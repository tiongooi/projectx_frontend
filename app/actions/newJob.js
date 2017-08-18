import {
    SET_NEW_JOB_CLIENT,
    SET_NEW_JOB_TASK,
    UNSET_NEW_JOB_TASK,
    SET_NEW_JOB_EMPLOYEE,
    INITIATING_NEW_JOB,
    INITIATE_NEW_JOB_SUCCESS,
    INITIATE_NEW_JOB_FAIL
} from '../constants';

import {testJobData} from '../testJobData';

exports.setClient = (client,navigation) => {
  return (dispatch) => {
    dispatch(settingClient(client))
    setTimeout(() => navigation.navigate('SelectTask'),100)
  }
}

exports.setTask = (task,newJobTask) => {
  return (dispatch) => {
    if (newJobTask.indexOf(task) < 0) {
      //not found, so we add it
      dispatch(settingTask(task))
    } else {
      //found, so we delete it
      let spliceIndex = newJobTask.indexOf(task)
      newJobTask.splice(spliceIndex,1)
      dispatch(unsettingTask(newJobTask))
    }
  }
}


exports.setEmployee = () => {
  return (dispatch) => {
    dispatch(settingEmployee())
  }
}

exports.initiateNewJob = () => {
  return (dispatch) => {
    dispatch(initiatingNewJob())
    //fetch...below is for testing only
    const res = {message: 'ok', data: testJobData }
    if (res.message == 'ok') {
      dispatch(initiateSuccess())
    } else {
      dispatch(initiateFail())
    }
  }
}

const settingClient = (client) => {
  return {
    type: SET_NEW_JOB_CLIENT,
    payload: client
  }
}

const settingTask = (task) => {
  return {
    type: SET_NEW_JOB_TASK,
    payload: task
  }
}

const unsettingTask = (newJobTask) => {
  return {
    type: UNSET_NEW_JOB_TASK,
    payload: newJobTask
  }
}

const settingEmployee = () => {
  return {
    type: SET_NEW_JOB_EMPLOYEE
  }
}

const initiatingNewJob = () => {
  return {
    type: INITIATING_NEW_JOB
  }
}

const initiateSuccess = (data) => {
  return {
    type: INITIATE_NEW_JOB_SUCCESS,
    payload: data
  }
}

const intiateFail = () => {
  return {
    type: INITIATE_NEW_JOB_FAIL,
    payload: 'An error has occured, please try again later'
  }
}
