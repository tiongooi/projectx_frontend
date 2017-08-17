import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const JobTemplateCard = (props) => {
  const template = props.template
  return (
    <TouchableHighlight>
      <View>
        <View>
          <Text>{template.client.propertyName}</Text>
          <Text>{template.title}</Text>
        </View>
        <View><Text>></Text></View>
      </View>
    </TouchableHighlight>
  )
}

export default JobTemplateCard;
