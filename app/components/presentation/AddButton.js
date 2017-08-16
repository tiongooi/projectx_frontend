import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const AddButton = (props) => {
    return(
      <TouchableHighlight onPress={()=> props.navigation.navigate('NewSetJob')}>
        <View>
          <Text> ++++ </Text>
        </View>
      </TouchableHighlight>
    )
}


export default AddButton;
