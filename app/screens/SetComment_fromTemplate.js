import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableHighlight, TextInput} from 'react-native'
import {setComment} from '../actions/newJob'
import {updateSetTitleAndCommentScreenKey} from '../actions/newJob'
import XButton from '../components/presentation/XButton'

class SetComment_fromTemplate extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Title',
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  render() {
    return(
      <View>
        <View>
          <TextInput
          style={{height: 40, borderColor: '#f2f3f4', borderWidth: 1}}
          placeholder={this.props.title}
          // value={this.props.title}
          maxLength={50}
          editable={false}
          />
        </View>
        <View>
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={'Leave a comment..'}
          onChangeText={(text) => this.props.setComment(text)}
          value={this.props.comment}
          maxLength={100}
          />
        </View>
        <TouchableHighlight onPress={()=>this.props.navigation.goBack()}>
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

export default connect(mapStateToProps,mapDispatchToProps)(SetComment_fromTemplate);
