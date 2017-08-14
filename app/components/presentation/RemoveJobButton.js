import React from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {removeJob} from '../../actions/removeJob';
import {NavigationActions} from 'react-navigation';

class RemoveJobButton extends React.Component {
  render() {
    return(
      <Button
      title={'Remove'}
      color={'#1578FB'}
      onPress={() => this.props.remove(this.props.jobId,NavigationActions,this.props.navigation.navigation, this.props.screenKey)}
      />
    )
  }
}

mapStateToProps = (state) => {
  return {
    screenKey: state.allSetJobs.daySummaryScreenKey
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    remove: (jobId,NavigationActions,navigation,screenKey) => dispatch(removeJob(jobId,NavigationActions,navigation,screenKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveJobButton);
