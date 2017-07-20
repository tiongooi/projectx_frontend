import React from "react";
import {ScrollView} from "react-native";
import {connect} from "react-redux";

const DaySummary = (props) => {
  return(
    <ScrollView>
      <ThisDate date={props.date} />
      <UserThumb image={} key={index} />
      <NumOfEmpNumOfJobs />
      <SetJob />
    </ScrollView>
  )
};

function mapStateToProps(state) {
  return {
    date: "Fri, 20th July",
    empForTheDay: [{avatar: "n/a", fName: "Jo", lName: "Lo"},{avatar: "n/a", fName: "Mac", lName: "Boot"}],
  }
};

function mapDispatchToProps(dispatch) {
  return {
    click: () => alert("hello")
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(DaySummary);
