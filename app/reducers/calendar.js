import {UPDATE_CALENDAR_SELECTED} from '../constants';

const initialState = {
  selected: new Date().toString()
};

const calendarReducer = (state=initialState, action) => {
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
