import React from "react";
import {View,Text} from "react-native";

const Weather = (props) => {
  return(
    <View>
      <Text>
        {props.weather}
      </Text>
    </View>
  )
};

module.exports = Weather;
