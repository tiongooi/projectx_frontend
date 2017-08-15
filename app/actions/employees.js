import {
  FETCHING_ALL_EMPLOYEES,
  FETCHING_ALL_EMPLOYEES_SUCCESS,
  FETCHING_ALL_EMPLOYEES_FAIL,
  REMOVING_EMPLOYEE,
  REMOVE_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_FAIL
} from '../constants';

//below is to test API fetching process
import {employees} from '../testEmployeeData';
import {employees2} from '../testEmployeeData';

exports.fetchEmployees = () => {
  return (dispatch) => {
    dispatch(fetchingEmployees())
    //fetch.. (below is only for testing)
    const res = {message:'ok', data: employees}
    if (res.message == 'ok') {
      dispatch(fetchSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

exports.removeEmployee = (employeeId, navigation) => {
  return (dispatch) => {
    dispatch(removingEmployee())
    //fetch.. (below is only for testing)
    const res = {message: 'ok', data: employees2};
    if (res.message == 'ok') {
      dispatch(removeSuccess(res.data))
      navigation.goBack()
    } else {
      dispatch(removeFail())
    }
  }
}

const fetchingEmployees = () => {
  return {
    type: FETCHING_ALL_EMPLOYEES
  }
}

const fetchSuccess = (data) => {
  return {
    type: FETCHING_ALL_EMPLOYEES_SUCCESS,
    payload: data
  }
}

const fetchFail = () => {
  return {
    type: FETCHING_ALL_EMPLOYEES_FAIL,
  }
}

const removingEmployee = () => {
  return {
    type: REMOVING_EMPLOYEE
  }
}

const removeSuccess = (data) => {
  return {
    type: REMOVE_EMPLOYEE_SUCCESS,
    payload: data
  }
}

const removeFail = () => {
  return {
    type: REMOVE_EMPLOYEE_FAIL
  }
}
