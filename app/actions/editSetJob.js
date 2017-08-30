import {
  POPULATE_EDIT_JOB_EMPLOYEE,
  POPULATE_EDIT_JOB_TASK,
  RESET_EDIT_JOB_FIELDS,
  SET_EDIT_JOB_EMPLOYEE,
  UNSET_EDIT_JOB_EMPLOYEE,
  SET_EDIT_JOB_TASK,
  UNSET_EDIT_JOB_TASK,
  UPDATING_EDIT_JOB,
  UPDATE_EDIT_JOB_SUCCESS,
  UPDATE_EDIT_JOB_FAIL,
  UPDATE_SET_JOBS
} from '../constants'

exports.quickAssign = (setJob,employeeList,navigate) => {
  return (dispatch) => {
    //1.clear edit job data
    //2.parse and populate edit employee field
    //3.navigate to page
    dispatch(resetEditSetJobFields())

    let employeeRemoved = []
    let clonedSetJobEmployee = [...setJob.employee]
    let clonedSetJob = {...setJob}

    clonedSetJobEmployee.map((setJobEmployee,index) => {
      let hasEmployeeBeenRemoved = employeeList.map(e => e.id).indexOf(setJobEmployee.id)
      if (hasEmployeeBeenRemoved == -1) {
        employeeRemoved.push(index)
      }
    })

    if (employeeRemoved.length !== 0) {
      //notify user that his employee list has changed
      console.log('Some employee has been removed because they are no longer in your employee list')
        for (let i = employeeRemoved.length -1; i >= 0; i--) {
          clonedSetJobEmployee.splice(employeeRemoved[i],1)
        }
    }
    clonedSetJob.employee = [...clonedSetJobEmployee]

    dispatch(populateEditSetJobEmployee(clonedSetJob))
    navigate('SelectEmployee_fromSetJob')
  }
}

exports.setEmployeeForJob = (employee, editJobEmployeeList) => {
  return (dispatch) => {
    let isEmployeeSet = editJobEmployeeList.map(ee => ee.id).indexOf(employee.id)
    if (isEmployeeSet == -1) {
      //not found, so we set it
      dispatch(setEmployee(employee))
    } else {
      // found, so we remove it
      let clonedEditJobEmployeeList = [...editJobEmployeeList]
      clonedEditJobEmployeeList.splice(isEmployeeSet,1)
      dispatch(unsetEmployee(clonedEditJobEmployeeList))
    }
  }
}

exports.setTaskForJob = (task,editJobTaskList) => {
  return (dispatch) => {
    let isTaskSet = editJobTaskList.map(et => et.id).indexOf(task.id)
    if (isTaskSet == -1) {
      //not found, so we add it
      dispatch(setTask(task))
    } else {
      //found, so we remove it
      let clonedEditJobTaskList = [...editJobTaskList]
      clonedEditJobTaskList.splice(isTaskSet,1)
      dispatch(unsetTask(clonedEditJobTaskList))
    }
  }
}

exports.resetEditJob = () => {
  return (dispatch) => {
    dispatch(resetEditSetJobFields())
  }
}

exports.quickRetask = (setJob,taskList,navigate) => {
  return (dispatch) => {
    //1.clear edit job data
    //2. parse and populate task field
    //3. navigate to page
    dispatch(resetEditSetJobFields())
    let taskRemoved = []
    let clonedTaskList = [...taskList]
    let clonedSetJob = {...setJob}

    clonedSetJob.task.map((task,index) => {
      let hasTaskBeenRemoved = clonedTaskList.map(ct => ct.id).indexOf(task.id)
      if (hasTaskBeenRemoved == -1) {
        //task was removed
        taskRemoved.push(index)
      }
    })

    if (taskRemoved.length !== 0) {
      //there are some tasks that was removed, notify user
      console.log('some tasks had been removed')
      for (let i = taskRemoved.length -1; i >= 0; i--) {
        clonedSetJob.task.splice(taskRemoved[i],1)
      }
    }

    dispatch(populateEditSetJobTask(clonedSetJob))
    navigate('SelectTask_fromSetJob')
  }
}

exports.confirmEmployee = (editJob,allSetJobs,navigation) => {
  return (dispatch) => {
    dispatch(updatingEditJob())
    let clonedEditJob = {...editJob}
    //fetch....(clonedEditJob)
    //below is for testing only==============
    let testIndex = allSetJobs.map(j => j.id).indexOf(editJob.id)
    let jobObj = {...allSetJobs[testIndex]}
    jobObj.employee = [...editJob.employee]
    //=======================================
    let res = {message: 'ok', data:jobObj}
    if (res.message == 'ok') {
      //all good. parse response and update store
      let clonedAllSetJobs = [...allSetJobs]
      let updatedJobIndex = allSetJobs.map(j => j.id).indexOf(res.data.id)
      clonedAllSetJobs.splice(updatedJobIndex,1,res.data)
      dispatch(updateSetJobs(clonedAllSetJobs))
      dispatch(updateEditJobSuccess())
      navigation.dismiss()
    } else {
      dispatch(updateEditJobFail())
      console.log('error')
      navigation.dismiss()
    }
  }
}

exports.confirmTask = (editJob,allSetJobs,navigation) => {
  return (dispatch) => {
    dispatch(updatingEditJob())
    let clonedEditJob = {...editJob}
    //fetch...(clonedEditJob)
    //below is for testing only ========
    let testIndex = allSetJobs.map(j => j.id).indexOf(editJob.id)
    let jobObj = {...allSetJobs[testIndex]}
    jobObj.task = [...editJob.task]
    //==================================
    let res = {message: 'ok', data:jobObj}
    if (res.message == 'ok') {
      //success
      let clonedAllSetJobs = [...allSetJobs]
      let updatedJobIndex = allSetJobs.map(j => j.id).indexOf(res.data.id)
      clonedAllSetJobs.splice(updatedJobIndex,1,res.data)
      dispatch(updateSetJobs(clonedAllSetJobs))
      dispatch(updateEditJobSuccess())
      navigation.dismiss()
    } else {
      //fail
      dispatch(updateEditJobFail())
      console.log('error')
      navigation.dismiss()
    }
  }
}

const resetEditSetJobFields = () => {
  return {
    type: RESET_EDIT_JOB_FIELDS
  }
}

const populateEditSetJobEmployee = (data) => {
  return {
    type: POPULATE_EDIT_JOB_EMPLOYEE,
    payload: data
  }
}

const populateEditSetJobTask = (data) => {
  return {
    type: POPULATE_EDIT_JOB_TASK,
    payload: data
  }
}

const setEmployee = (data) => {
  return {
    type: SET_EDIT_JOB_EMPLOYEE,
    payload: data
  }
}

const unsetEmployee = (data) => {
  return {
    type: UNSET_EDIT_JOB_EMPLOYEE,
    payload: data
  }
}

const setTask = (data) => {
  return {
    type: SET_EDIT_JOB_TASK,
    payload: data
  }
}

const unsetTask = (data) => {
  return {
    type: UNSET_EDIT_JOB_TASK,
    payload: data
  }
}

const updatingEditJob = () => {
  return {
    type: UPDATING_EDIT_JOB
  }
}

const updateEditJobSuccess = () => {
  return {
    type: UPDATE_EDIT_JOB_SUCCESS
  }
}

const updateEditJobFail = () => {
  return {
    type: UPDATE_EDIT_JOB_FAIL
  }
}

const updateSetJobs = (data) => {
  return {
    type: UPDATE_SET_JOBS,
    payload: data
  }
}
