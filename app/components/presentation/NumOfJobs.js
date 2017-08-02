import React from "react";
import {View, Text} from "react-native";

const NumOfJobs = (props) => {
  let text = '';
  if (props.numOfJobs !== 0) {
    if (props.numOfJobs == 1) {
      text = 'job set for today'
    } else {
      text = 'jobs set for today'
    }
  } else {
    return (
      <View>
        <Text>
          No job has been set for today
        </Text>
      </View>
    )
  }

  return(
    <View>
      <Text>
        {props.numOfJobs} {text}
      </Text>
    </View>
  )
};

module.exports = NumOfJobs;
