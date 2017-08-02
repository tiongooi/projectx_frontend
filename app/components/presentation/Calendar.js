import React, {Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.initialSelect,
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          selected={[this.state.selected]}
          markedDates={this.props.markedDates}
          theme={theme}
        />
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.clicked(day);
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
