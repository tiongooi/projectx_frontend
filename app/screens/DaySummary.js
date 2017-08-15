import React, {Component} from "react";
import {ScrollView,Text,View,TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import ThisDate from '../components/presentation/ThisDate';
import JobCard from '../components/presentation/JobCard';
import Avatar from '../components/presentation/Avatar';
import {updateCalendar} from '../actions/calendar';
import {updateScreenKey} from '../actions/allSetJobs';
import store from '../storeConfig';

class DaySummary extends Component {

  constructor(props) {
    super(props);
    this.nextDay = this.nextDay.bind(this);
    this.prevDay = this.prevDay.bind(this);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Summary',
      headerRight: (<Text>Add</Text>)
    }
  }

  render() {
    let todaysJobs = this.props.allSetJobs.filter((job) => {
      return new Date(this.props.calendarSelected).toISOString().slice(0,10) === job.date.dateString
    });
    const {navigate} = this.props.navigation;
    let hasJob = false;

    if (todaysJobs.length !== 0) {
      var displayJobsAndEmployees = '';
      var numOfJobs = todaysJobs.length;
      var daysEmployee = 0;

      todaysJobs.map(job => {
        daysEmployee += job.employee.length
      });

        if (todaysJobs.length === 1) {
          if (daysEmployee === 0) {
            displayJobsAndEmployees = todaysJobs.length + " job set for the day"
          } else if (daysEmployee === 1) {
            displayJobsAndEmployees = todaysJobs.length + " job, " + daysEmployee + " employee set for the day"
          } else {
            displayJobsAndEmployees = todaysJobs.length + " job, " + daysEmployee + " employees set for the day"
          }
        } else if (todaysJobs.length > 1) {
          if (daysEmployee === 0) {
            displayJobsAndEmployees = todaysJobs.length + " jobs set for the day"
          } else if (daysEmployee === 1) {
            displayJobsAndEmployees = todaysJobs.length + " jobs, " + daysEmployee + " employee set for the day"
          } else {
            displayJobsAndEmployees = todaysJobs.length + " jobs, " + daysEmployee + " employees set for the day"
          }
        };
        hasJob = true;
    }

        return(
          <ScrollView>
            <View>
              <TouchableHighlight onPress={this.prevDay}><View style={styles.button}></View></TouchableHighlight>
                <ThisDate date={this.props.calendarSelected} />
              <TouchableHighlight onPress={this.nextDay}><View style={styles.button}></View></TouchableHighlight>
            </View>
            {hasJob ? (
              <View>
                <View>
                  {
                    todaysJobs.map(job => {
                       return job.employee.map((employee,index) => {
                         return <Avatar avatar={employee.avatar} name={employee.fName} key={index} />
                      })
                    })
                  }
                </View>
                <View>
                  <Text>{displayJobsAndEmployees}</Text>
                </View>
                {
                  todaysJobs.map((job,index) => {
                    return <JobCard client={job.client.name} title={job.title} key={index} navigate={navigate} job={job} />
                  })
                }
            </View>
            ):(
              <Text>No job has been set for the day</Text>
            )}
          </ScrollView>
        )
    };

    componentWillMount() {
      store.dispatch(updateScreenKey(this.props.navigation.state.key));
    }

    nextDay() {
      todaysJobs = [];
      today = new Date(this.props.calendarSelected).getTime();
      newDay = new Date(today + 8.64e+7).toISOString().slice(0,10);

      for (x=0; x<this.props.allSetJobs.length; x++) {
        if (newDay === this.props.allSetJobs[x].date.dateString) {
          todaysJobs.push(this.props.allSetJobs[x]);
        }
      };

      if (todaysJobs.length == 0) {
        this.setState({
          todaysJobs: [],
        })
      } else {
        this.setState({
          todaysJobs: todaysJobs,
        })
      };
      this.props.updateSelected(newDay);
    }

    prevDay() {
      todaysJobs = [];
      today = new Date(this.props.calendarSelected).getTime();
      newDay = new Date(today - 8.64e+7).toISOString().slice(0,10);

      for (x=0; x<this.props.allSetJobs.length; x++) {
        if (newDay === this.props.allSetJobs[x].date.dateString) {
          todaysJobs.push(this.props.allSetJobs[x]);
        }
      };

      if (todaysJobs.length == 0) {
        this.setState({
          todaysJobs: [],
        })
      } else {
        this.setState({
          todaysJobs: todaysJobs,
        })
      };
      this.props.updateSelected(newDay);
    }


  }

mapStateToProps = (state) => {
  return {
    allSetJobs: state.allSetJobs.jobs,
    calendarSelected: state.calendar.selected
  }
};

mapDispatchToProps = (dispatch) => {
  return {
    updateSelected: (newDay) => dispatch(updateCalendar(newDay))
  }
};




const styles = {
  button: {
    backgroundColor: "red",
    width:50,
    height:50
  }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(DaySummary);
