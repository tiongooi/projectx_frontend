import React from "react";
import {ScrollView,Text,View,TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import ThisDate from '../components/presentation/ThisDate';
import JobCard from '../components/presentation/JobCard';
import Avatar from '../components/presentation/Avatar';
import testJobData from '../testJobData';

const DaySummary = (props) => {

  const {navigate} = props.navigation;
  const {todaysJobs, today} = props.navigation.state.params;
  let hasJob = false;
  console.log(todaysJobs);

  if (todaysJobs.length !== 0) {
    var displayJobsAndEmployees = '';
    var numOfJobs = todaysJobs.length;
    var daysEmployee = 0;

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
      hasJob = true;
  }



      return(
        <ScrollView>
          <View>
            <TouchableHighlight onPress={props.click}><View style={styles.button}></View></TouchableHighlight>
              <ThisDate date={today} />
            <TouchableHighlight onPress={props.click}><View style={styles.button}></View></TouchableHighlight>
          </View>
          {hasJob ? (
            <View>
              <View>
                {
                  todaysJobs.map(job => {
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
                todaysJobs.map((job,index) => {
                  return <JobCard client={job.client.name} title={job.title} key={index} />
                })
              }
          </View>
          ):(
            <Text>No job has been set for the day</Text>
          )}
        </ScrollView>
      )
  };

function mapStateToProps(state) {
  return {
    state
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
