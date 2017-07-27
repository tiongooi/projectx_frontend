import React from "react";
import {ScrollView,Text,View,TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import ThisDate from '../components/presentation/ThisDate';
import JobCard from '../components/presentation/JobCard';
import Avatar from '../components/presentation/Avatar';
import testJobData from '../testJobData';

const DaySummary = (props) => {
  let displayJobsAndEmployees = '';
  let daysJob = props.daysSetJobs.length;
  let daysEmployee = 0;

  props.daysSetJobs.map(job => {
    daysEmployee += job.employee.length
  });

  if (daysJob !== 0) {
    if (daysJob === 1) {
      if (daysEmployee === 0) {
        displayJobsAndEmployees = daysJob + " job set for the day"
      } else if (daysEmployee === 1) {
        displayJobsAndEmployees = daysJob + " job, " + daysEmployee + " employee set for the day"
      } else {
        displayJobsAndEmployees = daysJob + " job, " + daysEmployee + " employees set for the day"
      }
    } else if (daysJob > 1) {
      if (daysEmployee === 0) {
        displayJobsAndEmployees = daysJob + " jobs set for the day"
      } else if (daysEmployee === 1) {
        displayJobsAndEmployees = daysJob + " jobs, " + daysEmployee + " employee set for the day"
      } else {
        displayJobsAndEmployees = daysJob + " jobs, " + daysEmployee + " employees set for the day"
      }
    }
  } else {
    displayJobsAndEmployees = "No job set for the day"
  }

  return(
    <ScrollView>
      <View>
        <TouchableHighlight onPress={props.click}><View style={styles.button}></View></TouchableHighlight>
          <ThisDate date={props.date} />
        <TouchableHighlight onPress={props.click}><View style={styles.button}></View></TouchableHighlight>
      </View>
      <View>
        {
          props.daysSetJobs.map(job => {
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
        props.daysSetJobs.map((job,index) => {
          return <JobCard client={job.client} title={job.title} key={index} />
        })
      }
    </ScrollView>
  )
};

function mapStateToProps(state) {
  return {
    date: new Date(),
    daysSetJobs: testJobData
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
