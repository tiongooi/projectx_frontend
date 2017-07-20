import React from "react";
import {View, Text} from "react-native";

const ThisDate = (props) => {
  return(
    <View>
      <Text>
        {props.date}
      </Text>
    </View>
  )
};

module.exports = ThisDate;
