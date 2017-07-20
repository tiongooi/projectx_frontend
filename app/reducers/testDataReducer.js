
const initialState = {
  data: "hello world from react secret data",
  number: [1,2,3,4],
  dataNumber: 2,
  date: Date.now()
}

const testDataReducer = (state = initialState, action) => {
  return state
};

module.exports = testDataReducer;
