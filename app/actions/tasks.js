import {
  FETCHING_ALL_TASKS,
  FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAIL,
  CREATING_NEW_TASK,
  CREATE_NEW_TASK_SUCCESS,
  CREATE_NEW_TASK_FAIL,
  REMOVING_TASK,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAIL
} from '../constants';

import {testTaskData} from '../testTaskData';
import {testTaskData2} from '../testTaskData';

exports.fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchingTasks())
    //fetch...below is for testing only
    const res = {message:'ok', data:testTaskData}
    if (res.message == 'ok'){
      dispatch(fetchSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

exports.createTask = () => {
  return (dispatch) => {
    dispatch(creatingTask())
    //fetch..below for testing only
    const res = {message:'ok', data:[]}
    if (res.message == 'ok') {
      dispatch(createSuccess(res.data))
    } else {
      dispatch(createFail())
    }
  }
}

exports.removeTask = () => {
  return (dispatch) => {
    dispatch(removingTask())
    //fetch...for testing below
    const res = {message: 'ok', data: testTaskData2}
    if (res.message == 'ok') {
      dispatch(removeSuccess(res.data))
    } else {
      dispatch(removeFail())
    }
  }
}

const fetchingTasks = () => {
  return {
    type: FETCHING_ALL_TASKS
  }
}

const fetchSuccess = (data) => {
  return {
    type: FETCH_ALL_TASKS_SUCCESS,
    payload: data
  }
}

const fetchFail = () => {
  return {
    type: FETCH_ALL_TASKS_FAIL,
    payload: 'An error has occured, please try again'
  }
}

const creatingTask = () => {
  return {
    type: CREATING_NEW_TASK
  }
}

const createSuccess = (data) => {
  return {
    type: CREATE_NEW_TASK_SUCCESS,
    payload: data
  }
}

const createFail = () => {
  return {
    type: CREATE_NEW_TASK_FAIL,
    payload: 'An error has occured, please try again'
  }
}

const removingTask = () => {
  return {
    type: REMOVING_TASK
  }
}

const removeSuccess = (data) => {
  return {
    type: REMOVE_TASK_SUCCESS,
    payload: data
  }
}

const removeFail = () => {
  return {
    type: REMOVE_TASK_FAIL,
    payload: 'An error has occured, please try again'
  }
}
