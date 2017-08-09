import React from 'react';
import {View,Text, TouchableHighlight} from 'react-native';

const JobCard = (props) => {
  const job = props.job;

  return (
    <TouchableHighlight onPress={()=> props.navigate('JobDetails',{job})}>
      <View>
        <Text>{props.client}</Text>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  )
};

module.exports = JobCard;
