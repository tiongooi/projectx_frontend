import React from 'react'
import {connect} from 'react-redux'
import {ScrollView,View,Text,TouchableHighlight,StyleSheet} from 'react-native'
import MapView from 'react-native-maps'
import TaskCard from '../components/presentation/TaskCard'
import JobCard from '../components/presentation/JobCard'
import Avatar from '../components/presentation/Avatar'
import Maps from '../components/presentation/Maps'
import RemoveJobButton from '../components/presentation/RemoveJobButton'
import {quickAssign} from '../actions/editSetJob'
import {quickRetask} from '../actions/editSetJob'

class JobDetails extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Job',
      headerRight: ( <RemoveJobButton jobId={navigation.state.params.job.id} navigation={{navigation}}/> ),
    }
  }

  render() {
    const {navigate} = this.props.navigation
    let id = this.props.navigation.state.params.job.id
    let job = this.props.allSetJobs.find(j => j.id === id)
    let lastComment
    if (job.comment.length !== 0) {
      let comments = job.comment.slice()
      lastComment = comments.pop()
    }

    return(
      <ScrollView>
        <Maps coordinates={job.client.location.coordinates} />
        <JobCard client={job.client} title={job.title}/>
        <View>
          {
            job.employee.map((employee,index) => {
              return <Avatar user={employee} key={index} />
            })
          }
          <TouchableHighlight onPress={() => this.props.quickAssign(job,this.props.employeeList,navigate)}>
            <View><Avatar user={{avatar:"Quick", fName:"assign"}} /></View>
          </TouchableHighlight>
        </View>
        {
          (lastComment ?
            <View>
              <View style={styles.testDiv}></View>
              <Text>{lastComment.content}</Text>
            </View>
            :null)
        }
        <TouchableHighlight onPress={() => this.props.quickRetask(job,this.props.taskList,navigate)}>
          <View><Text>Edit Task</Text></View>
        </TouchableHighlight>
        {
          job.task.map((task,index) => {
            return <TaskCard task={task} key={index} />
          })
        }
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    employeeList: state.employees.allEmployees,
    allSetJobs: state.allSetJobs.jobs,
    taskList: state.tasks.allTasks
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    click: () => alert("clicked"),
    quickAssign: (job,employeeList,navigate) => dispatch(quickAssign(job,employeeList,navigate)),
    quickRetask: (job,taskList,navigate) => dispatch(quickRetask(job,taskList,navigate))
  }
}

const styles = StyleSheet.create({
  testDiv: {
    backgroundColor:"red",
    width:40,
    height:40,
    borderRadius:50
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(JobDetails);
