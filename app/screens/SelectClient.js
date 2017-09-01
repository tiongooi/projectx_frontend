import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView, TextInput} from 'react-native';
import {connect} from 'react-redux';
import ClientCard from '../components/presentation/ClientCard';
import XButton from '../components/presentation/XButton';
import {setClient} from '../actions/newJob';
import store from '../storeConfig';
import {resetJobData} from '../actions/newJob';
import {updateSearch} from '../actions/clients';
import {resetClientSearchBar} from '../actions/clients';

class SelectClient extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title:'Select Client',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  componentWillUnmount() {
    store.dispatch(resetJobData())
    store.dispatch(resetClientSearchBar())
  }

  render() {
    let hasClient = false
    let clientExists = true
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
    if (this.props.search.length !== 0 && filteredClient.length == 0 && hasClient == true) {
      clientExists = false
    }
 
    return(
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
          {
            hasClient ? (
              <View>
                {
                  clientExists ? (
                    <ScrollView>
                      {
                        filteredClient.map((client,index) => {
                          return <View key={index}>
                            <TouchableHighlight onPress={()=>this.props.setClient(client, this.props.navigation)}>
                              <View>
                                <ClientCard client={client} key={index} />
                              </View>
                            </TouchableHighlight>
                          </View>
                        })
                      }
                    </ScrollView>
                  ):(
                    <View>
                      <Text>Client not found. add?</Text>
                      <TouchableHighlight onPress={() => alert('adddddd')}>
                        <View><Text>ADD</Text></View>
                      </TouchableHighlight>
                    </View>
                  )
                }
              </View>
            ):(
              <View>
                <View><Text>Come back after you've got clients</Text></View>
                <TouchableHighlight><View><Text>ADD NOW!</Text></View></TouchableHighlight>
              </View>
            )
          }
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
    clicked: () => alert('hey baby'),
    setClient: (client, navigation) => dispatch(setClient(client, navigation)),
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectClient);
