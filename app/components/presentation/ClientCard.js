import React, {Component} from 'react';
import {Text,View,TouchableHighlight} from 'react-native';

const ClientCard = (props) => {
  const client = props.client
  return(
    <TouchableHighlight onPress={() => props.navigate('ClientSummary', {client}) }>
      <View>
        <View><Text>Avatar {client.avatar}</Text></View>
        <View>
          <Text>{client.propertyName}</Text>
          <Text>{client.location.street} {client.location.suburb}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ClientCard;
