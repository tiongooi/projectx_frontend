import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableHighlight, ScrollView, TextInput} from 'react-native'
import EmployeeCardSelectable from '../components/presentation/EmployeeCardSelectable'
import store from '../storeConfig'
import {updateEmployeeScreenKey} from '../actions/newJob'
import {resetTaskSearchBar} from '../actions/tasks'
import {updateSearch} from '../actions/employees'
import {resetEmployeeSearchBar} from '../actions/employees'
import XButton from '../components/presentation/XButton'

class SelectEmployee extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Employee',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  componentWillMount() {
    store.dispatch(updateEmployeeScreenKey(this.props.navigation.state.key))
    store.dispatch(resetTaskSearchBar())
  }

  componentWillUnmount() {
    store.dispatch(resetEmployeeSearchBar())
  }

  render() {
    let hasEmployee = false
    let employeeExists = true
    if (this.props.allEmployees.length !== 0) {
      hasEmployee = true
    }
    let filteredEmployee = this.props.allEmployees.filter(employee => {
      return employee.fName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.lName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.email.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.mobile.indexOf(this.props.search) !== -1
    })
    if (this.props.search.length !== 0 && filteredEmployee.length == 0 && hasEmployee == true) {
      employeeExists = false
    }
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
        <TouchableHighlight onPress={()=> this.props.navigation.navigate('SetTitleAndComment')}><View><Text>NEXT</Text></View></TouchableHighlight>
        {
          hasEmployee ? (
            <View>
              {
                employeeExists ? (
                  <ScrollView>
                    <View>
                      {
                        filteredEmployee.map((employee,index) => {
                          return !employee.pending ? (
                            <EmployeeCardSelectable employee={employee} key={index}/>
                          ):( null )
                        })
                      }
                    </View>
                  </ScrollView>
                ):(
                  <View>
                    <Text>Employee not found. add?</Text>
                    <TouchableHighlight onPress={() => alert('adddddd')}>
                      <View><Text>ADD</Text></View>
                    </TouchableHighlight>
                  </View>
                )
              }
            </View>
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
    search: state.employees.search
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clickeddddd'),
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectEmployee);
