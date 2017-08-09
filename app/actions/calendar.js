import {UPDATE_CALENDAR_SELECTED} from '../constants';

exports.updateCalendar = (newDay) => {
  return (dispatch) => {
    dispatch(updateSelectedDate(newDay))
  }
}

const updateSelectedDate = (newDate) => {
  const data = new Date(newDate).toString();
  return {
    type: UPDATE_CALENDAR_SELECTED,
    payload: data
  }
}
