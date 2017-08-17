import React, {Component} from 'react';
import {Text,View} from 'react-native';

const ClientCard = (props) => {
  const client = props.client
  return(
      <View>
        <View><Text>Avatar {client.avatar}</Text></View>
        <View>
          <Text>{client.propertyName}</Text>
          <Text>{client.location.street} {client.location.suburb}</Text>
        </View>
      </View>
  )
}

export default ClientCard;
