import React from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {removeJob} from '../../actions/removeJob';

class RemoveJobButton extends React.Component {
  render() {
    return(
      <Button
      title={'Remove'}
      color={'#1578FB'}
      onPress={() => this.props.remove(this.props.jobId, this.props.navigation.navigation)}
      />
    )
  }
}

mapStateToProps = (state) => {
  return {
    state
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    remove: (jobId,navigation) => dispatch(removeJob(jobId,navigation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveJobButton);
