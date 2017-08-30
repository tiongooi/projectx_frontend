import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import TaskCardSelectable from '../components/presentation/TaskCardSelectable';
import XButton from '../components/presentation/XButton';

class SelectTask_fromTemplate extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Tasks',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  render() {
    let hasTask = false
    if (this.props.allTasks.length !== 0) {
      hasTask = true
    }
    return(
      <View>
        <View>
          <Text>Search bar goes here</Text>
        </View>
        <TouchableHighlight onPress={()=> this.props.navigation.goBack()}><View><Text>DONE</Text></View></TouchableHighlight>
        {
          hasTask ? (
            <ScrollView>
              {
                this.props.allTasks.map((task,index) => {
                  return <TaskCardSelectable task={task} key={index} />
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
  console.log(state.newJob.task.length)
  return {
    allTasks: state.tasks.allTasks,
    newJobTask: state.newJob.task
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked'),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTask_fromTemplate);
