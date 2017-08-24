import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import TaskCardSelectable from '../components/presentation/TaskCardSelectable';
import store from '../storeConfig';
import {updateTaskScreenKey} from '../actions/newJob';
import XButton from '../components/presentation/XButton';

class SelectTask extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Tasks',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  componentWillMount() {
    store.dispatch(updateTaskScreenKey(this.props.navigation.state.key));
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
        <TouchableHighlight onPress={()=> this.props.navigation.navigate('SelectEmployee')}><View><Text>NEXT</Text></View></TouchableHighlight>
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

export default connect(mapStateToProps,mapDispatchToProps)(SelectTask);
