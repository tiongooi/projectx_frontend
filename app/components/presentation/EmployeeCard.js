import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

const EmployeeCard = (props) => {
  const employee = props.employee;
  return (
    employee.pending ? (
      <TouchableHighlight onPress={ () => props.navigate('EmployeeSummary',{employee}) }>
        <View>
          <View><Text>{employee.avatar}</Text></View>
          <Text>{employee.fName} {employee.lName}</Text>
          <View><Text>PENDING</Text></View>
        </View>
      </TouchableHighlight>
    ):(
      <TouchableHighlight onPress={ () => props.navigate('EmployeeSummary',{employee}) }>
        <View>
          <View><Text>{employee.avatar}</Text></View>
          <Text>{employee.fName} {employee.lName}</Text>
        </View>
      </TouchableHighlight>
    )
  )
}

export default EmployeeCard;
