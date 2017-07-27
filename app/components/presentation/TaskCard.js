import React from 'react';
import {Text} from 'react-native';

const TaskCard = (props) => {
  return (
    <Text>{props.task.content}</Text>
  )
}

export default TaskCard;
