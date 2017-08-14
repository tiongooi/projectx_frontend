import React from "react";
import {ScrollView,TouchableHighlight,View,Text} from "react-native";
import {connect} from "react-redux";
import TodaySnapshot from "../components/presentation/TodaySnapshot";
import Calendar from "../components/presentation/Calendar";
import {updateCalendar} from "../actions/calendar";

let navigateTo;

const Dashboard = (props) => {

  navigateTo = props.navigation.navigate.bind(this);

  const {navigate} = props.navigation;
  const today = new Date();
  const todaysDateString = new Date(today).toISOString().slice(0,10);
  const markedDatesDescriptor = {
    value: {marked:true},
    writable:true,
    enumerable:true,
    configurable:true
  }
  let todaysJobs = [];
  let passedJobs = [];
  let upcomingJobs = [];
  let markedDates = {};

  props.allSetJobs.map((job) => {
    if (todaysDateString === job.date.dateString) {
      let property = new Date(job.date.timestamp).toISOString().slice(0,10);
      Object.defineProperty(markedDates, property.toString(), markedDatesDescriptor);
      todaysJobs.push(job);
    } else {
      if (today.getTime() > job.date.timestamp) {
        let property = new Date(job.date.timestamp).toISOString().slice(0,10);
        Object.defineProperty(markedDates, property.toString(), markedDatesDescriptor);
        passedJobs.push(job);
      } else if (today.getTime() < job.date.timestamp) {
        let property = new Date(job.date.timestamp).toISOString().slice(0,10);
        Object.defineProperty(markedDates, property.toString(), markedDatesDescriptor);
        upcomingJobs.push(job);
      }
    }
  })

  return(
    <ScrollView>
      <TouchableHighlight onPress={()=> navigate('DaySummary',{todaysJobs, today})}>
        <View>
          <TodaySnapshot date={today}  numOfJobs={todaysJobs.length}/>
        </View>
      </TouchableHighlight>
        <Calendar markedDates={markedDates} initialSelect={props.calendarSelected} clicked={props.clicked}/>
    </ScrollView>
  )
};


function mapStateToProps(state) {
  return {
    allSetJobs: state.allSetJobs.jobs,
    calendarSelected: state.calendar.selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clicked: (day, store) => goToDate(day, store)
  }
}

function goToDate(day, store) {
  store.dispatch(updateCalendar(day.dateString));
  navigateTo('DaySummary');
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
