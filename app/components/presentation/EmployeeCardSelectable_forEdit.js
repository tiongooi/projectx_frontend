import React, {Component} from 'react'
import {Text,View,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {setEmployeeForJob} from '../../actions/editSetJob'//

class EmployeeCardSelectable_forEdit extends Component {
  render() {
    let employee = this.props.employee
    let selected = false
    this.props.editJobEmployee.map((editJobEmployee) => {
      if (editJobEmployee.id == employee.id) {
        selected = true
      }
    })
    return (
          <TouchableHighlight onPress={()=> this.props.setEmployeeForJob(employee,this.props.editJobEmployee)}>
            <View>
              {
                selected ? (
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
    editJobEmployee: state.editSetJob.employee
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked again'),
    setEmployeeForJob: (employee, editJobEmployee) => dispatch(setEmployeeForJob(employee, editJobEmployee))
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

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeCardSelectable_forEdit);
