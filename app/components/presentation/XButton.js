import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const XButton = (props) => {
    return (
      <TouchableHighlight onPress={()=> props.navigation.goBack(null)}>
        <View>
          <Text>   X   </Text>
        </View>
      </TouchableHighlight>
    )
}

export default XButton;
