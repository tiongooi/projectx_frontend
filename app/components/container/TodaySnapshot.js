import React from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import ThisDate from "../presentation/ThisDate";
import NumOfJobs from "../presentation/NumOfJobs";
import Temperature from "../presentation/Temperature";
import Weather from "../presentation/Weather";

const TodaySnapshot = (props) => {
  return(
    <View>
      <ThisDate date={props.thisDate}/>
      <NumOfJobs numOfJobs={props.numOfJobs}/>
      <Temperature temperature={props.temperature}/>
      <Weather weather={props.weather}/>
    </View>
  )
};

function mapStateToProps(state) {
  return {
    numOfJobs: 3, //state.number,
    temperature: 14, //state.dataNumber,
    weather: "Sunny", //state.data,
    date: "Wed, 14th July", //state.date,
    thisDate: Date.now()
  }
};

function mapDispatchToProps(dispatch) {
  return {
    click: () => alert("hello world")
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(TodaySnapshot);
