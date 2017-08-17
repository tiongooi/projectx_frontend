import React, {Component} from 'react';
import {View, Text} from 'react-native';

const EmployeeCard = (props) => {
  const employee = props.employee;
  return (
    employee.pending ? (
        <View>
          <View><Text>{employee.avatar}</Text></View>
          <Text>{employee.fName} {employee.lName}</Text>
          <View><Text>PENDING</Text></View>
        </View>
    ):(
        <View>
          <View><Text>{employee.avatar}</Text></View>
          <Text>{employee.fName} {employee.lName}</Text>
        </View>
    )
  )
}

export default EmployeeCard;
