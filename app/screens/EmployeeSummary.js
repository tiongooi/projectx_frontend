import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {removeEmployee} from '../actions/employees';

class EmployeeSummary extends Component {
  render() {
    const employee = this.props.navigation.state.params.employee;
    const {navigation} = this.props;
    return (
      <View>
        {
          employee.pending ? (
            <View>
              <View><Text>Avatar {employee.avatar}</Text></View>
              <View><Text>PENDING</Text></View>
              <View><Text></Text></View>
              <View><Text></Text></View>
              <View>
                <View><Text>mobile icon:</Text></View>
                <Text>-</Text>
              </View>
              <View>
                <View><Text>email icon:</Text></View>
                <Text>{employee.email}</Text>
              </View>
              <TouchableHighlight onPress={()=>this.props.removeEmployee(employee.id, navigation)}>
                <View><Text>Cancel invitation</Text></View>
              </TouchableHighlight>
            </View>
          ):(
            <View>
              <View><Text>Avatar {employee.avatar}</Text></View>
              <View><Text>{employee.fName} {employee.lName}</Text></View>
              <View><Text>{employee.addedOn}</Text></View>
              <View>
                <View><Text>mobile icon:</Text></View>
                <Text>{employee.mobile}</Text>
              </View>
              <View>
                <View><Text>email icon:</Text></View>
                <Text>{employee.email}</Text>
              </View>
              <TouchableHighlight onPress={()=>this.props.removeEmployee(employee.id, navigation)}>
                <View><Text>Remove</Text></View>
              </TouchableHighlight>
            </View>
          )
        }
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    state
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked'),
    removeEmployee: (employeeId, navigation) => dispatch(removeEmployee(employeeId, navigation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeSummary);
