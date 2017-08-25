import React, {Component} from 'react';
import {Text, View} from 'react-native';

const TemplateCard = (props) => {
  const template = props.template
  return (
      <View>
        <View>
          <Text>{template.client.propertyName}</Text>
          <Text>{template.title}</Text>
        </View>
      </View>
  )
}

export default TemplateCard;
