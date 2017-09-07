import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableHighlight, ScrollView, TextInput} from 'react-native'
import ClientCard from '../components/presentation/ClientCard'
import {resetClientSearchBar} from '../actions/clients'
import {updateSearch} from '../actions/clients'
import store from '../storeConfig'

class Clients extends Component {

  componentWillUnmount() {
    store.dispatch(resetClientSearchBar())
  }

  render() {
    const {navigate} = this.props.navigation
    let hasClient = false
    if (this.props.allClients.length !== 0) {
      hasClient = true
    }
    let filteredClient = this.props.allClients.filter(client => {
      return client.fName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             client.lName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             client.email.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             client.propertyName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             client.mobile.indexOf(this.props.search) !== -1
    })
    return (
      <View>
        <View>
          <TextInput
          style={{height: 40, borderColor: '#f2f3f4', borderWidth: 1}}
          placeholder={'Search client'}
          value={this.props.search}
          maxLength={50}
          onChangeText={(text) => this.props.updateSearch(text)}
          autoCorrect={false}
          />
        </View>
        <ScrollView>
          {
            hasClient ? (
              filteredClient.map((client, index) => {
              return <View key={index}>
                <TouchableHighlight onPress={() => navigate('ClientSummary', {client})}>
                  <View>
                   <ClientCard client={client} key={index} />
                  </View>
                </TouchableHighlight>
              </View>
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
    allClients: state.clients.allClients,
    search: state.clients.search
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Clients)
