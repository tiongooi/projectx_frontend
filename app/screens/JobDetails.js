import React from 'react';
import {connect} from 'react-redux';
import {ScrollView,View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import TaskCard from '../components/presentation/TaskCard';
import JobCard from '../components/presentation/JobCard';
import Avatar from '../components/presentation/Avatar';
import Maps from '../components/presentation/Maps';
import testJobObject from '../testJobObject';

class JobDetails extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    const {job} = this.props.navigation.state.params;
    let lastComment;
    if (job.comment.length !== 0) {
      lastComment = job.comment.pop()
    }

    return(
      <ScrollView>
        <Maps coordinates={job.client.location.coordinates} />
        <JobCard client={job.client.name} title={job.title}/>
        <View>
          {
            job.employee.map((employee,index) => {
              return <Avatar avatar={employee.avatar} name={employee.fName} key={index} />
            })
          }
          <TouchableHighlight onPress={this.props.click}>
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
        <TouchableHighlight onPress={this.props.click}>
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

export default connect(mapStateToProps,mapDispatchToProps)(JobDetails);
