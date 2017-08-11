import initialState from '../initialState';
import {UPDATE_CALENDAR_SELECTED} from '../constants';

const calendarReducer = (state=initialState.calendar, action) => {
  switch(action.type) {
    case UPDATE_CALENDAR_SELECTED: {
      return {
        ...state,
        selected: action.payload
      }
    }
    default: return state
  }
}

export default calendarReducer;
