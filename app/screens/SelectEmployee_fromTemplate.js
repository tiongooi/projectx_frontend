import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import EmployeeCardSelectable from '../components/presentation/EmployeeCardSelectable'
import store from '../storeConfig'
import {updateEmployeeScreenKey} from '../actions/newJob'
import XButton from '../components/presentation/XButton'

class SelectEmployee_fromTemplate extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Employee',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  render() {
    let hasEmployee = false
    if (this.props.allEmployees.length !== 0) {
      hasEmployee = true
    }
    return (
      <View>
        <View><Text>Search bar goes here</Text></View>
        <TouchableHighlight onPress={()=> this.props.navigation.goBack()}><View><Text>DONE</Text></View></TouchableHighlight>
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
  console.log(state.newJob.employee.length)
  return {
    allEmployees: state.employees.allEmployees
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clickeddddd')
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectEmployee_fromTemplate);
