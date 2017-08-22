import React from 'react';
import {View,Text} from 'react-native';

const Avatar = (props) => {
  return (
    <View>
      <View><Text>{props.user.avatar}</Text></View>
      <Text>{props.user.fName}</Text>
    </View>
  )
}

export default Avatar;
