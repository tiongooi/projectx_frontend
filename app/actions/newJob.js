import {
    UPDATE_SELECT_TEMPLATE_SCREEN_KEY,
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
    INITIATE_NEW_JOB_FAIL,
    UPDATE_SET_JOBS,
    RESET_NEW_JOB_DATA,
    POPULATE_NEW_JOB_FIELDS
} from '../constants';
import store from '../storeConfig';

import {testJobData} from '../testJobData';

exports.updateSelectTemplateScreenKey = (key) => {
  return (dispatch) => {
    dispatch(updatingTemplateScreenKey(key))
  }
}

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
    let isTaskSet = newJobTask.map(t => t.id).indexOf(task.id)
    if (isTaskSet < 0) {
      //not found, so we set
      dispatch(settingTask(task))
      console.log(`${task.content} - ADDED`)
    } else {
      //found, so we remove
      let clonedNewJobTask = [...newJobTask]
      clonedNewJobTask.splice(isTaskSet,1)
      console.log(`${task.content} - REMOVED`)
      dispatch(unsettingTask(clonedNewJobTask))
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
    let isEmployeeSet = newJobEmployee.map(e => e.id).indexOf(employee.id)
    if (isEmployeeSet < 0) {
      //not found, so we add
      console.log(`${employee.fName} has been added`)
      dispatch(settingEmployee(employee))
    } else {
      //found, so we get rid of it
      let clonedNewEmployee = [...newJobEmployee]
      console.log(`${clonedNewEmployee[isEmployeeSet].fName} has been removed`)
      clonedNewEmployee.splice(isEmployeeSet,1)
      dispatch(unsettingEmployee(clonedNewEmployee))
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

exports.initiateNewJob = (calendar,navigation) => {
  return (dispatch) => {
    let time = new Date(calendar)
    //1.create new job object with data from store with date
    //2. server will extract date to create template, and save the full version as job. Server save job first, then save template
    //3.server will respond with object{msg:'ok',data:{setjob:{list of set jobs},template:{list of templates}}}
    dispatch(initiatingNewJob())
    //below is for testing only =======================
    let testNewSetJob = {...store.getState().newJob}
    testNewSetJob.comment = [{content:testNewSetJob.comment}]
    testNewSetJob.date = {
      timestamp: time.getTime(),
      dateString: time.toISOString().slice(0,10),
      date: time.getDate(),
      month: time.getMonth() + 1,
      year: time.getFullYear()
    }
    //==================================================
    let newSetJob = {...store.getState().newJob}
    newSetJob.employee = [...store.getState().newJob.employee]
    newSetJob.task = [...store.getState().newJob.task]
    newSetJob.client = newSetJob.client.id
    newSetJob.date = {
      timestamp: time.getTime(),
      dateString: time.toISOString().slice(0,10),
      date: time.getDate(),
      month: time.getMonth() + 1,
      year: time.getFullYear()
    }
    if (newSetJob.employee.length !== 0) {
      newSetJob.employee.map((employee,index) => {
        newSetJob.employee.splice(index, 1, employee.id)
      })
    }
    if (newSetJob.task.length !== 0) {
      newSetJob.task.map((task,index) => {
        newSetJob.task.splice(index, 1, task.id)
      })
    }
    //fetch...send newSetJob object to server
    const res = {message: 'ok', data: {allSetJobs: [...store.getState().allSetJobs.jobs, testNewSetJob], allTemplates:{}}}
    if (res.message == 'ok') {
      dispatch(initiateSuccess())
      dispatch(updateSetJobs(res.data.allSetJobs))
      //dispatch(updateTemplate(res.data.allTemplates))
      navigation.dismiss()
    }
  }
}

exports.selectThisTemplate = (template,employeeList,taskList,navigation) => {
  return (dispatch) => {
    dispatch(resetNewJobData())
    let employeeNotInList = []
    let taskNotInList = []
    let clonedTemplate = {...template}
    clonedTemplate.employee = [...template.employee]
    clonedTemplate.task = [...template.task]

    if (employeeList.length !== 0) {
      clonedTemplate.employee.map((te,index) => {
        let isEmployeeFound = employeeList.map(e => e.id).indexOf(te.id)
        if (isEmployeeFound < 0) {
          //employee no longer exist in employee list, so we push into array and remove it
          console.log('removed')
          employeeNotInList.push(index)
        }
      })
    }

    if (taskList.length !== 0) {
      clonedTemplate.task.map((tt,index) => {
        let isTaskFound = taskList.map(t => t.id).indexOf(tt.id)
        if (isTaskFound < 0) {
          //task no longer exist in list, push into array and remove it from template
          console.log('removed')
          taskNotInList.push(index)
        }
      })
    }

    if (employeeNotInList.length !== 0) {
      for (let i = employeeNotInList.length -1; i >= 0; i--) {
        clonedTemplate.employee.splice(employeeNotInList[i],1)
      }
    }

    if (taskNotInList.length !== 0) {
      for (let i = taskNotInList.length -1; i >= 0; i--) {
        clonedTemplate.task.splice(taskNotInList[i],1)
      }
    }

    if (taskNotInList.length !== 0 || employeeNotInList.length !== 0) {
      //either employee or task has been removed, we notify user and go back
      navigation.goBack()
    } else {
      dispatch(populateNewJob(clonedTemplate))
      navigation.navigate('ConfirmNewJob_fromTemplate')
    }

  }
}

exports.resetJobData = () => {
  return (dispatch) => {
    dispatch(resetNewJobData())
  }
}

const updatingTemplateScreenKey = (data) => {
  return {
    type: UPDATE_SELECT_TEMPLATE_SCREEN_KEY,
    payload: data
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

const initiateSuccess = () => {
  return {
    type: INITIATE_NEW_JOB_SUCCESS
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

const updateSetJobs = (data) => {
  return {
    type: UPDATE_SET_JOBS,
    payload: data
  }
}

const resetNewJobData = () => {
  return {
    type: RESET_NEW_JOB_DATA
  }
}

const populateNewJob = (data) => {
  return {
    type: POPULATE_NEW_JOB_FIELDS,
    payload: data
  }
}
