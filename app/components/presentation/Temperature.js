import React from "react";
import {View, Text} from "react-native";

const Temperature = (props) => {
  return(
    <View>
      <Text>
        {props.temperature}c
      </Text>
    </View>
  )
};

module.exports = Temperature;
