import React,{Component} from 'react';
import {View,Text} from 'react-native';

const TaskCard = (props) => {
  return (
    <Text>{props.task.content}</Text>
  )
}

export default TaskCard;
