import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import EmployeeCardSelectable from '../components/presentation/EmployeeCardSelectable'
import store from '../storeConfig'
import {updateEmployeeScreenKey} from '../actions/newJob'
import XButton from '../components/presentation/XButton'

class SelectEmployee extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Employee',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  componentWillMount() {
    store.dispatch(updateEmployeeScreenKey(this.props.navigation.state.key));
  }

  render() {
    let hasEmployee = false
    if (this.props.allEmployees.length !== 0) {
      hasEmployee = true
    }
    return (
      <View>
        <View><Text>Search bar goes here</Text></View>
        <TouchableHighlight onPress={()=> this.props.navigation.navigate('SetTitleAndComment')}><View><Text>NEXT</Text></View></TouchableHighlight>
        {
          hasEmployee ? (
            <ScrollView>
              <View>
                {
                  this.props.allEmployees.map((employee,index) => {
                    return !employee.pending ? (
                      <EmployeeCardSelectable employee={employee} key={index}/>
                    ):( null )
                  })
                }
              </View>
            </ScrollView>
          ):(
            <View>
              <Text>No employee found</Text>
              <TouchableHighlight onPress={()=> alert('add now')}><View><Text>Add Now</Text></View></TouchableHighlight>
            </View>
          )
        }
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    allEmployees: state.employees.allEmployees,
    test: state.newJob.employee
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clickeddddd')
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectEmployee);
