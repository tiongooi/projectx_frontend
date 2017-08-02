import React from "react";
import {View} from "react-native";
import ThisDate from "../presentation/ThisDate";
import NumOfJobs from "../presentation/NumOfJobs";
import Temperature from "../presentation/Temperature";
import Weather from "../presentation/Weather";

const TodaySnapshot = (props) => {

  return(
    <View>
      <ThisDate date={props.date}/>
      <NumOfJobs numOfJobs={props.numOfJobs}/>
      <Temperature temperature={14}/>
      <Weather weather={'sunny'}/>
    </View>
  )
};


export default TodaySnapshot;
