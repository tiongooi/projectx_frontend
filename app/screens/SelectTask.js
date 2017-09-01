import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight, ScrollView, TextInput} from 'react-native';
import TaskCardSelectable from '../components/presentation/TaskCardSelectable';
import store from '../storeConfig';
import {updateTaskScreenKey} from '../actions/newJob';
import {resetClientSearchBar} from '../actions/clients';
import {updateSearch} from '../actions/tasks';
import {resetTaskSearchBar} from '../actions/tasks';
import XButton from '../components/presentation/XButton';

class SelectTask extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Tasks',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  componentWillMount() {
    store.dispatch(updateTaskScreenKey(this.props.navigation.state.key))
    store.dispatch(resetClientSearchBar())
  }

  componentWillUnmount() {
    store.dispatch(resetTaskSearchBar())
  }

  render() {
    let hasTask = false
    let taskExists = true
    if (this.props.allTasks.length !== 0) {
      hasTask = true
    }
    let filteredTask = this.props.allTasks.filter(task => {
      return task.content.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
    })

    if (this.props.search.length !== 0 && filteredTask.length == 0 && hasTask == true) {
      taskExists = false
    }
    return(
      <View>
        <View>
          <TextInput
          style={{height: 40, borderColor: '#f2f3f4', borderWidth: 1}}
          placeholder={'Search task'}
          value={this.props.search}
          maxLength={50}
          onChangeText={(text) => this.props.updateSearch(text)}
          autoCorrect={false}
          />
        </View>
        <TouchableHighlight onPress={()=> this.props.navigation.navigate('SelectEmployee')}><View><Text>NEXT</Text></View></TouchableHighlight>
        {
          hasTask ? (
            <View>
              {
                taskExists ? (
                  <ScrollView>
                    {
                      filteredTask.map((task,index) => {
                        return <TaskCardSelectable task={task} key={index} />
                      })
                    }
                  </ScrollView>
                ):(
                  <TouchableHighlight onPress={() => alert('adddd task')}>
                    <View><Text>ADD</Text></View>
                  </TouchableHighlight>
                )
              }
            </View>
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
    newJobTask: state.newJob.task,
    search: state.tasks.search
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked'),
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTask);
