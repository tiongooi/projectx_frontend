import initialState from '../initialState';
import {
  FETCHING_ALL_EMPLOYEES,
  FETCHING_ALL_EMPLOYEES_SUCCESS,
  FETCHING_ALL_EMPLOYEES_FAIL,
  REMOVING_EMPLOYEE,
  REMOVE_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_FAIL
} from '../constants';

const employeesReducer = (state = initialState.employees, action) => {
  switch(action.type) {
    case FETCHING_ALL_EMPLOYEES: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case FETCHING_ALL_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        allEmployees: action.payload
      }
    }
    case FETCHING_ALL_EMPLOYEES_FAIL: {
      return {
        ...state,
        isFetching: false,
        message: 'An error has occured, please try again'
      }
    }
    case REMOVING_EMPLOYEE: {
      return {
        ...state,
        isRemoving: true
      }
    }
    case REMOVE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isRemoving: false,
        allEmployees: action.payload
      }
    }
    case REMOVE_EMPLOYEE_FAIL: {
      return {
        ...state,
        isRemoving: false,
        message: 'An error has occured, please try again'
      }
    }
    default: return state
  }
};

export default employeesReducer;
