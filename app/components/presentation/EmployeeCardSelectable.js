import React, {Component} from 'react'
import {Text,View,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {setEmployee} from '../../actions/newJob'

class EmployeeCardSelectable extends Component {
  render() {
    const employee = this.props.employee
    return (
          <TouchableHighlight onPress={()=> this.props.setEmployee(employee,this.props.newJobEmployee)}>
            <View>
              {
                this.props.newJobEmployee.includes(employee) ? (
                  <View>
                      <View><Text>{employee.avatar}</Text></View>
                      <Text>{employee.fName} {employee.lName}</Text>
                      <View style={styles.selected}></View>
                  </View>
                ):(
                  <View>
                      <View><Text>{employee.avatar}</Text></View>
                      <Text>{employee.fName} {employee.lName}</Text>
                      <View style={styles.notSelected}></View>
                  </View>
                )
              }
            </View>
          </TouchableHighlight>
    )
  }
}

mapStateToProps = (state) => {
  return {
    newJobEmployee: state.newJob.employee
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked again'),
    setEmployee: (employee, newJobEmployee) => dispatch(setEmployee(employee, newJobEmployee))
  }
}

const styles = {
  selected: {
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 50
  },
  notSelected: {
    backgroundColor: 'grey',
    width: 20,
    height: 20,
    borderRadius: 50
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeCardSelectable);
