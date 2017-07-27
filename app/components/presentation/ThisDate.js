import React from "react";
import {View, Text} from "react-native";

const ThisDate = (props) => {
let d = new Date(props.date);
let day = days[d.getDay()];
let month = months[d.getMonth()];
let date = d.getDate();
let displayDate = '';

if (date === 1) {
      displayDate = day + ", " + date + "st of " + month
  } else if (date === 2) {
      displayDate = day + ", " + date + "nd of " + month
  } else if (date === 3) {
      displayDate = day + ", " + date + "rd of " + month
  } else {
      displayDate = day + ", " + date + "th of " + month
}

return (
  <Text>{displayDate}</Text>
)

};

const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

module.exports = ThisDate;
