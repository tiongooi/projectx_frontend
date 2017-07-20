import React from "react";
import {ScrollView} from "react-native";
import TodaySnapshot from "../components/container/TodaySnapshot";
import Calendar from "../components/container/Calendar";

const Dashboard = (props) => {
  return(
    <ScrollView>
      <TodaySnapshot />
      <Calendar />
    </ScrollView>
  )
};

module.exports = Dashboard;
