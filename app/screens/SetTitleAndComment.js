import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableHighlight, TextInput} from 'react-native'
import {setTitle} from '../actions/newJob'
import {setComment} from '../actions/newJob'
import store from '../storeConfig'
import {updateSetTitleAndCommentScreenKey} from '../actions/newJob'

class SetTitleAndComment extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Title'
    }
  }

  componentWillMount() {
    store.dispatch(updateSetTitleAndCommentScreenKey(this.props.navigation.state.key));
  }

  render() {
    return(
      <View>
        <View>
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={'Job title..'}
          onChangeText={(text) => this.props.setTitle(text)}
          value={this.props.title}
          maxLength={50}
          />
        </View>
        <View><Text>{this.props.title}</Text></View>
        <View>
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={'Leave a comment..'}
          onChangeText={(text) => this.props.setComment(text)}
          value={this.props.comment}
          maxLength={100}
          />
        </View>
        <View><Text>{this.props.comment}</Text></View>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('ConfirmNewJob')}>
          <View><Text>DONE</Text></View>
        </TouchableHighlight>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    title: state.newJob.title,
    comment: state.newJob.comment
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('hello'),
    setTitle: (text) => dispatch(setTitle(text)),
    setComment: (text) => dispatch(setComment(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetTitleAndComment);
