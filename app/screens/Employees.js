import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native';
import {fetchEmployees} from '../actions/employees';
import EmployeeCard from '../components/presentation/EmployeeCard';

class Employees extends Component {

  componentWillMount() {
    this.props.fetchAllEmployees()
  }

  render() {
    const {navigate} = this.props.navigation;
    let hasEmployee = false;
    if (this.props.allEmployees.length !== 0) {
      hasEmployee = true
    }
    return(
      <View>
        <View><Text>Search bar goes here</Text></View>
        <ScrollView>
          {
            hasEmployee ? (
              this.props.allEmployees.map((employee, index) => {
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
    allEmployees: state.employees.allEmployees
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked'),
    fetchAllEmployees: () => dispatch(fetchEmployees())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Employees);
