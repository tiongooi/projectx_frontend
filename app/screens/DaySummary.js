import React from "react";
import {ScrollView,Text,View,TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import ThisDate from '../components/presentation/ThisDate';
import JobCard from '../components/presentation/JobCard';
import Avatar from '../components/presentation/Avatar';
import testJobData from '../testJobData';

const DaySummary = (props) => {

  const {navigate} = props.navigation;
  const todaysJobs = props.navigation.state.params;
  let jobz = false;


      let displayJobsAndEmployees = '';
      let numOfJobs = todaysJobs.length;
      let daysEmployee = 0;

      todaysJobs.map(job => {
        daysEmployee += job.employee.length
      });

        if (todaysJobs.length === 1) {
          if (daysEmployee === 0) {
            displayJobsAndEmployees = todaysJobs.length + " job set for the day"
          } else if (daysEmployee === 1) {
            displayJobsAndEmployees = todaysJobs.length + " job, " + daysEmployee + " employee set for the day"
          } else {
            displayJobsAndEmployees = todaysJobs.length + " job, " + daysEmployee + " employees set for the day"
          }
        } else if (todaysJobs.length > 1) {
          if (daysEmployee === 0) {
            displayJobsAndEmployees = todaysJobs.length + " jobs set for the day"
          } else if (daysEmployee === 1) {
            displayJobsAndEmployees = todaysJobs.length + " jobs, " + daysEmployee + " employee set for the day"
          } else {
            displayJobsAndEmployees = todaysJobs.length + " jobs, " + daysEmployee + " employees set for the day"
          }
        };


      return(
        <ScrollView>
          <View>
            <TouchableHighlight onPress={props.click}><View style={styles.button}></View></TouchableHighlight>
              <ThisDate date={props.date} />
            <TouchableHighlight onPress={props.click}><View style={styles.button}></View></TouchableHighlight>
          </View>
          {jobz ? (<Text>true-haha</Text>):(<Text>false-boo</Text>)}
          {/* <View>
            {
              props.daysJobs.map(job => {
                 return job.employee.map((employee,index) => {
                   return <Avatar avatar={employee.avatar} name={employee.fName} key={index} />
                })
              })
            }
          </View>
          <View>
            <Text>{displayJobsAndEmployees}</Text>
          </View>
          {
            props.daysJobs.map((job,index) => {
              return <JobCard client={job.client} title={job.title} key={index} />
            })
          } */}
        </ScrollView>
      )
  };

function mapStateToProps(state) {
  return {
    date: new Date(),
    daysJobs: testJobData
  }
};

function mapDispatchToProps(dispatch) {
  return {
    click: () => alert("hello")
  }
};

const styles = {
  button: {
    backgroundColor: "red",
    width:20,
    height:20
  }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(DaySummary);
