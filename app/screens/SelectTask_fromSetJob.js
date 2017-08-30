import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import TaskCardSelectable_forEdit from '../components/presentation/TaskCardSelectable_forEdit';
import XButton from '../components/presentation/XButton';
import {confirmTask} from '../actions/editSetJob';

class SelectTask_fromSetJob extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Tasks',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  render() {
    const {navigation} = this.props
    let hasTask = false
    if (this.props.allTasks.length !== 0) {
      hasTask = true
    }
    return(
      <View>
        <View>
          <Text>Search bar goes here</Text>
        </View>
        <TouchableHighlight onPress={()=> this.props.confirmTask(this.props.editSetJob,this.props.allSetJobs,navigation)}><View><Text>DONE</Text></View></TouchableHighlight>
        {
          hasTask ? (
            <ScrollView>
              {
                this.props.allTasks.map((task,index) => {
                  return <TaskCardSelectable_forEdit task={task} key={index} />
                })
              }
            </ScrollView>
          ):(
            <Text>You do not have any task. Simply enter a task and click add</Text>
          )
        }
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    allTasks: state.tasks.allTasks,
    allSetJobs: state.allSetJobs.jobs,
    editSetJob: state.editSetJob
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked'),
    confirmTask: (editSetJob,allSetJobs,navigation) => dispatch(confirmTask(editSetJob,allSetJobs,navigation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTask_fromSetJob);
