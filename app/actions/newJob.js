import {
    SET_NEW_JOB_CLIENT,
    UPDATE_SELECT_TASK_SCREEN_KEY,
    SET_NEW_JOB_TASK,
    UNSET_NEW_JOB_TASK,
    UPDATE_SELECT_EMPLOYEE_SCREEN_KEY,
    SET_NEW_JOB_EMPLOYEE,
    UNSET_NEW_JOB_EMPLOYEE,
    UPDATE_SET_TITLE_AND_COMMENT_SCREEN_KEY,
    SET_NEW_JOB_TITLE,
    SET_NEW_JOB_COMMENT,
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

exports.updateTaskScreenKey = (key) => {
  return (dispatch) => {
    dispatch(updatingTaskScreenKey(key))
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

exports.updateEmployeeScreenKey = (key) => {
  return (dispatch) => {
    dispatch(updatingEmployeeScreenKey(key))
  }
}

exports.setEmployee = (employee,newJobEmployee) => {
  return (dispatch) => {
    if (newJobEmployee.indexOf(employee) < 0) {
      //not found, so we add it
      dispatch(settingEmployee(employee))
    } else {
      //found, so we remove it
      let spliceIndex = newJobEmployee.indexOf(employee)
      newJobEmployee.splice(spliceIndex,1)
      dispatch(unsettingEmployee(newJobEmployee))
    }
  }
}

exports.updateSetTitleAndCommentScreenKey = (key) => {
  return (dispatch) => {
    dispatch(updatingSetTitleAndCommentScreenKey(key))
  }
}

exports.setTitle = (text) => {
  return (dispatch) => {
    dispatch(settingTitle(text))
  }
}

exports.setComment = (text) => {
  return (dispatch) => {
    dispatch(settingComment(text))
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

const updatingTaskScreenKey = (data) => {
  return {
    type: UPDATE_SELECT_TASK_SCREEN_KEY,
    payload: data
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

const updatingEmployeeScreenKey = (data) => {
  return {
    type: UPDATE_SELECT_EMPLOYEE_SCREEN_KEY,
    payload: data
  }
}

const settingEmployee = (employee) => {
  return {
    type: SET_NEW_JOB_EMPLOYEE,
    payload: employee
  }
}

const unsettingEmployee = (newJobEmployee) => {
  return {
    type: UNSET_NEW_JOB_EMPLOYEE,
    payload: newJobEmployee
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

const updatingSetTitleAndCommentScreenKey = (data) => {
  return {
    type: UPDATE_SET_TITLE_AND_COMMENT_SCREEN_KEY,
    payload: data
  }
}

const settingTitle = (text) => {
  return {
    type: SET_NEW_JOB_TITLE,
    payload: text
  }
}

const settingComment = (text) => {
  return {
    type: SET_NEW_JOB_COMMENT,
    payload: text
  }
}
