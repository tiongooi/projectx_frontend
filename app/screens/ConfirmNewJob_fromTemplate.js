import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, ScrollView, TouchableHighlight} from 'react-native'
import TaskCard from '../components/presentation/TaskCard'
import Avatar from '../components/presentation/Avatar'
import Maps from '../components/presentation/Maps'
import JobCard from '../components/presentation/JobCard'
import {initiateNewJob} from '../actions/newJob'
import XButton from '../components/presentation/XButton'
import store from '../storeConfig'
import {resetTemplateSearchBar} from '../actions/templates'
import {resetJobData} from '../actions/newJob'

class ConfirmNewJob_fromTemplate extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Confirm Job',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  componentWillUnmount() {
    store.dispatch(resetJobData())
  }

  componentWillMount() {
    store.dispatch(resetTemplateSearchBar())
  }

  render() {
    const {navigation} = this.props
    let hasEmployee = false
    let hasTask = false
    let hasComment = false

    if (this.props.employee.length !== 0) {
      hasEmployee = true
    }
    if (this.props.task.length !== 0) {
      hasTask = true
    }
    if (this.props.comment.length !== 0) {
      hasComment = true
    }
    return (
      <ScrollView>
        <Maps coordinates={this.props.client.location.coordinates} />
          <View>
            <JobCard client={this.props.client} title={this.props.title}/>
          </View>
          <View>
            {
              hasEmployee ? (
                this.props.employee.map((employee,index) => {
                  return <Avatar user={employee} key={index} />
                })
              ):(
                <Text>No employee has been assigned to this job</Text>
              )
            }
            <TouchableHighlight onPress={() => navigation.navigate('SelectEmployee_fromTemplate')}>
              <View>
                <Avatar user={{avatar:'quick', fName:'assign'}} />
              </View>
            </TouchableHighlight>
          </View>
        <TouchableHighlight onPress={() => alert('go to comment/title page but freeze title')}>
          <View>
            {
              hasComment ? (
                <TouchableHighlight onPress={() => navigation.navigate('SetComment_fromTemplate')}><View><Text>{this.props.comment}</Text></View></TouchableHighlight>
              ):(
                <TouchableHighlight onPress={() => navigation.navigate('SetComment_fromTemplate')}><View><Text>No comments</Text></View></TouchableHighlight>
              )
            }
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('SelectTask_fromTemplate')}><View><Text>quick re-task</Text></View></TouchableHighlight>
          <View>
            {
              hasTask ? (
                this.props.task.map((task, index) => {
                  return <TaskCard task={task} key={index} />
                })
              ):(
                <Text>No task has been set for this job</Text>
              )
            }
          </View>
        <TouchableHighlight onPress={() => this.props.initiateNewJob(this.props.calendarSelected,this.props.navigation)}>
          <View>
            <Text>SUBMIT</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

mapStateToProps = (state) => {
  return {
    client: state.newJob.client,
    task: state.newJob.task,
    employee: state.newJob.employee,
    title: state.newJob.title,
    comment: state.newJob.comment,
    backFromSelectTask: state.newJob.selectTaskScreenKey,
    backFromSelectEmployee: state.newJob.selectEmployeeScreenKey,
    backFromSetTitleAndComment: state.newJob.setTitleAndCommentScreenKey,
    calendarSelected: state.calendar.selected
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    initiateNewJob: (calendar,navigation) => dispatch(initiateNewJob(calendar,navigation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmNewJob_fromTemplate);
