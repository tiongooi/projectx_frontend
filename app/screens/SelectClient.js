import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ClientCard from '../components/presentation/ClientCard';
import XButton from '../components/presentation/XButton';
import {setClient} from '../actions/newJob';

class SelectClient extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title:'Select Client',
      // headerRight: ( <XButton navigation={navigation} />)
    }
  }
  render() {
    let hasClient = false
    if (this.props.allClients.length !== 0) {
      hasClient = true
    }
    return(
      <View>
        <View><Text>Seach bar goes here</Text></View>
          {
            hasClient ? (
              <ScrollView>
                {
                  this.props.allClients.map((client,index) => {
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
    allClients: state.clients.allClients
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('hey baby'),
    setClient: (client, navigation) => dispatch(setClient(client, navigation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectClient);
