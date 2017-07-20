import React from "react";
import {View, Text} from "react-native";

const NumOfJobs = (props) => {
  return(
    <View>
      <Text>
        {props.numOfJobs} jobs set for today
      </Text>
    </View>
  )
};

module.exports = NumOfJobs;
