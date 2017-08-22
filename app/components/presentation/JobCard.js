import React from 'react';
import {View,Text} from 'react-native';

const JobCard = (props) => {
  return (
      <View>
        <Text>{props.client.propertyName}</Text>
        <Text>{props.title}</Text>
      </View>
  )
};

module.exports = JobCard;
