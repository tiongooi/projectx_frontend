import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {connect} from 'react-redux';

class SelectTemplate extends Component {
  render() {
    return(
      <View>
        
      </View>
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
    clicked: () => alert('slsls')
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectTemplate);
