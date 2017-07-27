import React from 'react';
import {View,Text} from 'react-native';

const Avatar = (props) => {
  return (
    <View>
      <View><Text>{props.avatar}</Text></View>
      <Text>{props.name}</Text>
    </View>
  )
}

export default Avatar;
