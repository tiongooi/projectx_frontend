import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import TaskCard from '../components/presentation/TaskCard';

class SelectTask extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Tasks'
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
        {
          hasTask ? (
            <ScrollView>
              {
                this.props.allTasks.map((task,index) => {
                  //set up onPress Task.Selected=true, test reducer assign
                  return <View key={index}>
                    <TouchableHighlight onPress={()=>alert('booyah')}>
                      <View>
                        <TaskCard task={task} key={index}/>
                      </View>
                    </TouchableHighlight>
                  </View>
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
    allTasks: state.tasks.allTasks
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked')
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTask);
