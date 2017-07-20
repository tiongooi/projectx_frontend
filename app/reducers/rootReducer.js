import {combineReducers} from "redux";
import testDataReducer from "./testDataReducer";

const rootReducer = combineReducers({
  testData: testDataReducer
});

module.exports = rootReducer;
