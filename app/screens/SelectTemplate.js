import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import XButton from '../components/presentation/XButton';
import JobTemplateCard from '../components/presentation/JobTemplateCard';
import {updateSelectTemplateScreenKey} from '../actions/newJob';
import store from '../storeConfig';

class SelectTemplate extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'New job',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  componentWillMount() {
    store.dispatch(updateSelectTemplateScreenKey(this.props.navigation.state.key));
  }

  render() {
    let hasTemplate = false
    if (this.props.jobTemplates.length !== 0) {
      hasTemplate = true
    }

    return(
      <View>
        <View>
          <View>
            <Text>Search bar goes here</Text>
          </View>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('SelectClient')}>
            <View><Text>Create New Job</Text></View>
          </TouchableHighlight>
        </View>
        <ScrollView>
          {
            hasTemplate ? (
              this.props.jobTemplates.map((template,index) => {
                return <JobTemplateCard template={template} key={index}/>
              })
            ):(
              <Text>You do not have any template</Text>
            )
          }
        </ScrollView>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    jobTemplates: []
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('slsls'),
    updateSelectTemplateScreenKey: (key) => dispatch(updateSelectTemplateScreenKey(key))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTemplate);
