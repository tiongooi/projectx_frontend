import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableHighlight, ScrollView, TextInput} from 'react-native'
import EmployeeCardSelectable_forEdit from '../components/presentation/EmployeeCardSelectable_forEdit'
import store from '../storeConfig'
import {updateEmployeeScreenKey} from '../actions/newJob'
import XButton from '../components/presentation/XButton'
import {confirmEmployee} from '../actions/editSetJob'
import {updateSearch} from '../actions/employees'
import {resetEmployeeSearchBar} from '../actions/employees'

class SelectEmployee_fromSetJob extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Employee',
      headerRight: ( <XButton navigation={navigation} />),
      headerLeft: null
    }
  }

  componentWillMount() {
    store.dispatch(resetEmployeeSearchBar())
  }

  render() {
    const {navigation} = this.props
    let hasEmployee = false
    if (this.props.allEmployees.length !== 0) {
      hasEmployee = true
    }
    let filteredEmployee = this.props.allEmployees.filter(employee => {
      return employee.fName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.lName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.email.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.mobile.indexOf(this.props.search) !== -1
    })
    return (
      <View>
        <View>
          <TextInput
          style={{height: 40, borderColor: '#f2f3f4', borderWidth: 1}}
          placeholder={'Search employee'}
          value={this.props.search}
          maxLength={50}
          onChangeText={(text) => this.props.updateSearch(text)}
          autoCorrect={false}
          />
        </View>
        <TouchableHighlight onPress={()=> this.props.confirmEmployee(this.props.editJob,this.props.allSetJobs,navigation)}><View><Text>DONE</Text></View></TouchableHighlight>
        {
          hasEmployee ? (
            <ScrollView>
              <View>
                {
                  filteredEmployee.map((employee,index) => {
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
    search: state.employees.search,
    allEmployees: state.employees.allEmployees,
    editJob: state.editSetJob,
    allSetJobs: state.allSetJobs.jobs
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clickeddddd'),
    confirmEmployee: (editJob,allSetJobs,navigation) => dispatch(confirmEmployee(editJob,allSetJobs,navigation)),
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectEmployee_fromSetJob);
