import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,TouchableHighlight} from 'react-native';
import {removeClient} from '../actions/clients';

class ClientSummary extends Component {
  render() {
    let client = this.props.navigation.state.params.client

    return(
      <View>
        <View><Text>Avatar {client.avatar}</Text></View>
        <View>
          <View><Text>property name icon:</Text></View>
          <View><Text>{client.propertyName}</Text></View>
        </View>
        <View>
          <View><Text>location icon:</Text></View>
          <View>
            <Text>{client.location.street} {client.location.suburb}</Text>
            <Text>{client.location.state} {client.location.postcode} {client.location.country}</Text>
          </View>
        </View>
        <View>
          <View><Text>client contact icon:</Text></View>
          <View><Text>{client.fName} {client.lName}</Text></View>
        </View>
        <View>
          <View><Text>client mobile icon:</Text></View>
          <View><Text>{client.mobile}</Text></View>
        </View>
        <View>
          <View><Text>client email icon:</Text></View>
          <View><Text>{client.email}</Text></View>
        </View>
        <View>
          <TouchableHighlight onPress={()=>this.props.removeClient(client.id,this.props.navigation)}><View><Text>Remove</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={()=>this.props.clicked()}><View><Text>Edit</Text></View></TouchableHighlight>
        </View>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    state
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('heyhey'),
    removeClient: (clientId,navigation) => dispatch(removeClient(clientId,navigation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClientSummary);
