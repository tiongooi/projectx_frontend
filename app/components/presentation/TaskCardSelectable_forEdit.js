import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {setTaskForJob} from '../../actions/editSetJob'

class TaskCardSelectable_forEdit extends Component {
  render() {
    let task = this.props.task
    let selected = false
    this.props.editJobTask.map(t => {
      if (t.id == task.id ) {
        selected = true
      }
    })
    return (
      <TouchableHighlight onPress={()=>this.props.setTaskForJob(task,this.props.editJobTask)}>
        <View>
          {
            selected ? (
              <View>
                <View><Text>{this.props.task.content}</Text></View>
                <View style={styles.selected}></View>
              </View>
            ):(
              <View>
                <View><Text>{this.props.task.content}</Text></View>
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
    editJobTask: state.editSetJob.task
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('boooooyah'),
    setTaskForJob: (task,editJobTask) => dispatch(setTaskForJob(task,editJobTask))
  }
}

const styles = {
  selected: {
    backgroundColor:'red',
    width:20,
    height:20,
    borderRadius:50
  },
  notSelected: {
    backgroundColor: 'grey',
    width: 20,
    height: 20,
    borderRadius: 50
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskCardSelectable_forEdit)
