import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View,Text,ScrollView,TouchableHighlight,TextInput,KeyboardAvoidingView,FlatList,Keyboard} from 'react-native'
import {writeComment} from '../actions/editSetJob'
import {postComment} from '../actions/editSetJob'
import XButton from '../components/presentation/XButton'

class SetComment_fromSetJob extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Comments',
      headerLeft: null,
      headerRight: ( <XButton navigation={navigation} />)
    }
  }

  render() {
    let comments = [...this.props.allComments].reverse()
    return (
      <KeyboardAvoidingView behavior={'position'} style={{backgroundColor:'red',flex:1}} >
          <View style={styles.commentDisplay}>
            <FlatList
              data={comments}
              renderItem={({item})=> <View style={{transform:[{scaleY:-1}]}}><Text>{item.content}</Text><Text>-{item.fromUser.fName}</Text></View>}
              style={{transform:[{scaleY: -1}]}}
              keyExtractor={(item, index) => index}
            />
          </View>
          <View style={styles.commentInput} >
            <TextInput
              style={{height: 40, borderColor: 'red', borderWidth: 1}}
              placeholder={'Leave a comment..'}
              onChangeText={(text) => this.props.writeComment(text)}
              value={this.props.writtenComment}
              maxLength={100}
             />
           <TouchableHighlight onPress={()=> this.props.postComment(this.props.editJob,this.props.allSetJobs,this.props.navigation,Keyboard)}>
             <View><Text>DONE</Text></View>
           </TouchableHighlight>
          </View>
          <View style={{height:50,backgroundColor:'blue'}} />
      </KeyboardAvoidingView>
    )
  }
}

mapStateToProps = (state) => {
  return {
    allComments: state.editSetJob.comment,
    writtenComment: state.editSetJob.newComment,
    editJob: state.editSetJob,
    allSetJobs: state.allSetJobs.jobs,
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    writeComment: (text) => dispatch(writeComment(text)),
    postComment: (editJob,allSetJobs,navigation,Keyboard) => dispatch(postComment(editJob,allSetJobs,navigation,Keyboard))
  }
}

const styles = {
  commentDisplay: {
    height:400,
    backgroundColor: 'grey'
  },
  commentInput: {
    height:100,
    backgroundColor: 'aqua'
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetComment_fromSetJob)
