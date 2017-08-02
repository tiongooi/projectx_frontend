import React from 'react';
import {connect} from 'react-redux';
import {ScrollView,View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import TaskCard from '../components/presentation/TaskCard';
import JobCard from '../components/presentation/JobCard';
import Avatar from '../components/presentation/Avatar';
import Maps from '../components/presentation/Maps';
import testJobObject from '../testJobObject';

const JobDetails = (props) => {

  const navigate = props.navigation;
  let lastComment;

  if (props.job.comment.length !== 0) {
    lastComment = props.job.comment.pop()
  }

  return (
    <ScrollView>
      <Maps location={props.location} />
      <JobCard client={props.job.client} title={props.job.title}/>
      <View>
        {
          props.job.employee.map((employee,index) => {
            return <Avatar avatar={employee.avatar} name={employee.fName} key={index} />
          })
        }
        <TouchableHighlight onPress={props.click}>
          <View><Avatar avatar={"Quick Assign"} name={"Quick Assign"} /></View>
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
      <TouchableHighlight onPress={props.click}>
        <View><Text>Edit Task</Text></View>
      </TouchableHighlight>
      {
        props.job.task.map((task,index) => {
          return <TaskCard task={task} key={index} />
        })
      }
    </ScrollView>
  )
};

function mapStateToProps(state) {
  return {
    job: testJobObject,
    location: {
      latitude:-33.865143,
      longitude:151.209900,
      latitudeDelta: 0.0040,
      longitudeDelta: 0.0040
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => alert("clicked")
  }
}

const styles = StyleSheet.create({
  testDiv: {
    backgroundColor:"red",
    width:40,
    height:40,
    borderRadius:50
  }
});

module.exports = connect(mapStateToProps,mapDispatchToProps)(JobDetails);
