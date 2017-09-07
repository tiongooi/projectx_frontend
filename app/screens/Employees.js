import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View,Text,TouchableHighlight,ScrollView,TextInput} from 'react-native'
import {resetEmployeeSearchBar} from '../actions/employees'
import {updateSearch} from '../actions/employees'
import EmployeeCard from '../components/presentation/EmployeeCard'
import store from '../storeConfig'

class Employees extends Component {

  componentWillUnmount() {
    store.dispatch(resetEmployeeSearchBar())
  }

  render() {
    const {navigate} = this.props.navigation;
    let hasEmployee = false;
    if (this.props.allEmployees.length !== 0) {
      hasEmployee = true
    }
    let filteredEmployee = this.props.allEmployees.filter(employee => {
      return employee.fName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.lName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.email.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ||
             employee.mobile.indexOf(this.props.search) !== -1
    })
    return(
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
        <ScrollView>
          {
            hasEmployee ? (
              filteredEmployee.map((employee, index) => {
                return <View key={index}>
                  <TouchableHighlight onPress={ () => navigate('EmployeeSummary',{employee}) }>
                    <View>
                      <EmployeeCard employee={employee} key={index}/>
                    </View>
                  </TouchableHighlight>
                </View>
              })
            ):(<Text>You do not have any employee yet</Text>)
          }
        </ScrollView>
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
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Employees);
