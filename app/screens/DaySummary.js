import React, {Component} from "react";
import {ScrollView,Text,View,TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import ThisDate from '../components/presentation/ThisDate';
import JobCard from '../components/presentation/JobCard';
import Avatar from '../components/presentation/Avatar';
import {updateCalendar} from '../actions/calendar';
import store from '../storeConfig';

class DaySummary extends Component {

  constructor(props) {
    super(props);
    this.nextDay = this.nextDay.bind(this);
    this.prevDay = this.prevDay.bind(this);
    this.state = {
      todaysJobs: [],
      counter: 0,
      today:''
    }
  }

  render() {

    const {navigate} = this.props.navigation;
    let hasJob = false;

    if (this.state.todaysJobs.length !== 0) {
      var displayJobsAndEmployees = '';
      var numOfJobs = this.state.todaysJobs.length;
      var daysEmployee = 0;

      this.state.todaysJobs.map(job => {
        daysEmployee += job.employee.length
      });

        if (this.state.todaysJobs.length === 1) {
          if (daysEmployee === 0) {
            displayJobsAndEmployees = this.state.todaysJobs.length + " job set for the day"
          } else if (daysEmployee === 1) {
            displayJobsAndEmployees = this.state.todaysJobs.length + " job, " + daysEmployee + " employee set for the day"
          } else {
            displayJobsAndEmployees = this.state.todaysJobs.length + " job, " + daysEmployee + " employees set for the day"
          }
        } else if (this.state.todaysJobs.length > 1) {
          if (daysEmployee === 0) {
            displayJobsAndEmployees = this.state.todaysJobs.length + " jobs set for the day"
          } else if (daysEmployee === 1) {
            displayJobsAndEmployees = this.state.todaysJobs.length + " jobs, " + daysEmployee + " employee set for the day"
          } else {
            displayJobsAndEmployees = this.state.todaysJobs.length + " jobs, " + daysEmployee + " employees set for the day"
          }
        };
        hasJob = true;
    }

        return(
          <ScrollView>
            <View>
              <TouchableHighlight onPress={this.prevDay}><View style={styles.button}></View></TouchableHighlight>
                <ThisDate date={this.state.today} />
              <TouchableHighlight onPress={this.nextDay}><View style={styles.button}></View></TouchableHighlight>
            </View>
            {hasJob ? (
              <View>
                <View>
                  {
                    this.state.todaysJobs.map(job => {
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
                  this.state.todaysJobs.map((job,index) => {
                    return <JobCard client={job.client.name} title={job.title} key={index} navigate={navigate} job={job}/>
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
        const {todaysJobs, today} = this.props.navigation.state.params;
        let newDay = today.toString();
        store.dispatch(updateCalendar(newDay));
        this.setState({
          todaysJobs: todaysJobs,
          today: new Date(today).toISOString().slice(0,10),
          counter: 0,
        });
    }

    nextDay() {
      todaysJobs = [];
      counter = this.state.counter;
      today = new Date(this.state.today).getTime();
      newDay = new Date(today + 8.64e+7).toISOString().slice(0,10);

      for (x=0; x<this.props.allSetJobs.length; x++) {
        if (newDay === this.props.allSetJobs[x].date.dateString) {
          todaysJobs.push(this.props.allSetJobs[x]);
        }
      };

      if (todaysJobs.length == 0) {
        this.setState({
          todaysJobs: [],
          today: newDay,
        })
      } else {
        this.setState({
          todaysJobs: todaysJobs,
          today: newDay,
        })
      };
      this.props.updateSelected(newDay);
    }

    prevDay() {
      todaysJobs = [];
      counter = this.state.counter;
      today = new Date(this.state.today).getTime();
      newDay = new Date(today - 8.64e+7).toISOString().slice(0,10);

      for (x=0; x<this.props.allSetJobs.length; x++) {
        if (newDay === this.props.allSetJobs[x].date.dateString) {
          todaysJobs.push(this.props.allSetJobs[x]);
        }
      };

      if (todaysJobs.length == 0) {
        this.setState({
          todaysJobs: [],
          today: newDay,
          counter: counter
        })
      } else {
        this.setState({
          todaysJobs: todaysJobs,
          today: newDay,
          counter: counter
        })
      };
      this.props.updateSelected(newDay);
    }

  }

mapStateToProps = (state) => {
  return {
    allSetJobs: state.allSetJobs.jobs
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
