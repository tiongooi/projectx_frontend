import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {fetchClients} from '../actions/clients';

class Clients extends Component {

  componentWillMount() {
    this.props.fetchClients()
  }

  render() {
    return (
      <View><Text>{this.props.allClients.length}</Text></View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    allClients: state.clients.allClients
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('hi there'),
    fetchClients: () => fetchClients()
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Clients);
