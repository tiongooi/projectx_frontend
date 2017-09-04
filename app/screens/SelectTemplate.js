import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView, TextInput} from 'react-native';
import {connect} from 'react-redux';
import XButton from '../components/presentation/XButton';
import TemplateCard from '../components/presentation/TemplateCard';
import {updateSelectTemplateScreenKey} from '../actions/newJob';
import {selectThisTemplate} from '../actions/newJob';
import {updateSearch} from '../actions/templates';
import {resetTemplateSearchBar} from '../actions/templates';
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

  componentWillUnmount() {
    store.dispatch(resetTemplateSearchBar())
  }

  render() {
    let hasTemplate = false
    if (this.props.templates.length !== 0) {
      hasTemplate = true
    }
    let filteredTemplate = this.props.templates.filter(template => {
      return template.client.propertyName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             template.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
    })
    return(
      <View>
        <View>
          <View>
            <TextInput
            style={{height: 40, borderColor: '#f2f3f4', borderWidth: 1}}
            placeholder={'Search template'}
            value={this.props.search}
            maxLength={50}
            onChangeText={(text) => this.props.updateSearch(text)}
            autoCorrect={false}
            />
          </View>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('SelectClient')}>
            <View><Text>Create New Job</Text></View>
          </TouchableHighlight>
        </View>
        <ScrollView>
          {
            hasTemplate ? (
              filteredTemplate.map((template,index) => {
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
    search: state.templates.search,
    templates: state.templates.allTemplates,
    employeeList: state.employees.allEmployees,
    taskList: state.tasks.allTasks
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('slsls'),
    updateSelectTemplateScreenKey: (key) => dispatch(updateSelectTemplateScreenKey(key)),
    selectThisTemplate: (template,employeeList,taskList,navigation) => dispatch(selectThisTemplate(template,employeeList,taskList,navigation)),
    updateSearch: (text) => dispatch(updateSearch(text)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTemplate);
