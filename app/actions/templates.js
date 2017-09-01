import {
  FETCHING_ALL_TEMPLATES,
  FETCH_ALL_TEMPLATES_SUCCESS,
  FETCH_ALL_TEMPLATES_FAIL,
  UPDATE_TEMPLATE_SEARCH,
  RESET_TEMPLATE_SEARCH
} from '../constants'

import {testTemplateData} from '../testTemplateData'

exports.fetchTemplates = () => {
  return (dispatch) => {
    dispatch(fetchingTemplates())
    //fetch..
    const res = {message:'ok', data: testTemplateData}
    if (res.message == 'ok') {
      dispatch(fetchSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

const fetchingTemplates = () => {
  return {
    type: FETCHING_ALL_TEMPLATES
  }
}

const fetchSuccess = (data) => {
  return {
    type: FETCH_ALL_TEMPLATES_SUCCESS,
    payload: data
  }
}

const fetchFail = () => {
  return {
    type: FETCH_ALL_TEMPLATES_FAIL,
    payload: 'An error has occured, please try again'
  }
}
