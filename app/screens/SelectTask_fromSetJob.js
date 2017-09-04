import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, TouchableHighlight, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import TaskCardSelectable_forEdit from '../components/presentation/TaskCardSelectable_forEdit'
import XButton from '../components/presentation/XButton'
import {confirmTask} from '../actions/editSetJob'
import {updateSearch} from '../actions/tasks'
import {resetTaskSearchBar} from '../actions/tasks'
import store from '../storeConfig'

class SelectTask_fromSetJob extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Select Tasks',
      headerRight: ( <XButton navigation={navigation} />),
      headerLeft: null
    }
  }

  componentWillMount() {
    store.dispatch(resetTaskSearchBar())
  }

  render() {
    const {navigation} = this.props
    let hasTask = false
    if (this.props.allTasks.length !== 0) {
      hasTask = true
    }
    let filteredTask = this.props.allTasks.filter(task => {
      return task.content.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
    })
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
          <TouchableHighlight onPress={()=> this.props.confirmTask(this.props.editSetJob,this.props.allSetJobs,navigation)}><View><Text>DONE</Text></View></TouchableHighlight>
          {
            hasTask ? (
              <ScrollView>
                {
                  filteredTask.map((task,index) => {
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
    editSetJob: state.editSetJob,
    search: state.tasks.search
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('clicked'),
    confirmTask: (editSetJob,allSetJobs,navigation) => dispatch(confirmTask(editSetJob,allSetJobs,navigation)),
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTask_fromSetJob)
