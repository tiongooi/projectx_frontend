import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import XButton from '../components/presentation/XButton';
import TemplateCard from '../components/presentation/TemplateCard';
import {updateSelectTemplateScreenKey} from '../actions/newJob';
import {selectThisTemplate} from '../actions/newJob';
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
    if (this.props.templates.length !== 0) {
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
              this.props.templates.map((template,index) => {
                return <View key={index}>
                        <TouchableHighlight onPress={()=> this.props.selectThisTemplate(template,this.props.employeeList,this.props.taskList,this.props.navigation)}>
                          <View>
                            <TemplateCard template={template} key={index}/>
                          </View>
                        </TouchableHighlight>
                       </View>
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
    templates: state.templates.allTemplates,
    employeeList: state.employees.allEmployees,
    taskList: state.tasks.allTasks
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('slsls'),
    updateSelectTemplateScreenKey: (key) => dispatch(updateSelectTemplateScreenKey(key)),
    selectThisTemplate: (template,employeeList,taskList,navigation) => dispatch(selectThisTemplate(template,employeeList,taskList,navigation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTemplate);
