import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {fetchClients} from '../actions/clients';
import ClientCard from '../components/presentation/ClientCard';

class Clients extends Component {

  componentWillMount() {
    this.props.fetchClients();
  }

  render() {
    const {navigate} = this.props.navigation
    let hasClient = false
    if (this.props.allClients.length !== 0) {
      hasClient = true
    }
    return (
      <View>
        <View><Text>Search bar goes here</Text></View>
        <ScrollView>
          {
            hasClient ? (
              this.props.allClients.map((client, index) => {
                return <ClientCard client={client} navigate={navigate} key={index} />
              })
            ):(
              <Text>You do not have any client</Text>
            )
          }
        </ScrollView>
      </View>
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
    fetchClients: () => dispatch(fetchClients())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Clients);
