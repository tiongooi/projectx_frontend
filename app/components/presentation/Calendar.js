import React, {Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {connect} from 'react-redux';
import {Calendar} from 'react-native-calendars';
import store from '../../storeConfig';

class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          selected={[this.props.calendarSelected]}
          markedDates={this.props.markedDates}
          theme={theme}
        />
      </View>
    );
  }


  onDayPress(day) {
    this.props.clicked(day, store);
  }

}

mapStateToProps = (state) => {
  return {
    calendarSelected: state.calendar.selected
  }
}


const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 25,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 400
  },
  text: {
    textAlign: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

const theme = {
    calendarBackground: '#333248',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'black',
    monthTextColor: 'white',
    selectedDayBackgroundColor: '#fff',
    arrowColor: 'white',
    dotColor:"#bdbcd1",
    selectedDotColor: "black",
    todayTextColor: "#b89b99",
    textDayHeaderFontSize: 14,
    textMonthFontSize: 18,
    textDayFontSize: 17
  }

  export default connect(mapStateToProps)(CalendarComponent);
