import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import EmployeeCardSelectable_forEdit from '../components/presentation/EmployeeCardSelectable_forEdit'
import store from '../storeConfig'
import {updateEmployeeScreenKey} from '../actions/newJob'
import XButton from '../components/presentation/XButton'
import {confirmEmployee} from '../actions/editSetJob'

class SelectEmployee_fromSetJob extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Employee',
      headerRight: ( <XButton navigation={navigation} />),
      headerLeft: null
    }
  }

  render() {
    const {navigation} = this.props
    let hasEmployee = false
    if (this.props.allEmployees.length !== 0) {
      hasEmployee = true
    }
    return (
      <View>
        <View><Text>Search bar goes here</Text></View>
        <TouchableHighlight onPress={()=> this.props.confirmEmployee(this.props.editJob,this.props.allSetJobs,navigation)}><View><Text>DONE</Text></View></TouchableHighlight>
        {
          hasEmployee ? (
            <ScrollView>
              <View>
                {
                  this.props.allEmployees.map((employee,index) => {
                    return !employee.pending ? (
                      <EmployeeCardSelectable_forEdit employee={employee} key={index}/>
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
    editJob: state.editSetJob,
    allSetJobs: state.allSetJobs.jobs
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clickeddddd'),
    confirmEmployee: (editJob,allSetJobs,navigation) => dispatch(confirmEmployee(editJob,allSetJobs,navigation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectEmployee_fromSetJob);
