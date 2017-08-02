import {DrawerNavigator, StackNavigator} from "react-navigation";
import Dashboard from "./screens/Dashboard";
import DaySummary from "./screens/DaySummary";
import JobDetails from "./screens/JobDetails";

//dashboard stack navigator
const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  DaySummary: {
    screen: DaySummary
  },
  JobDetails: {
    screen: JobDetails
  }
});

//root navigator
const Navigator = DrawerNavigator({
  Dashboard: {
    screen: DashboardStack
  },
  // Employees: {
  //   screen: EmployeeStack
  // },
  // Clients: {
  //   screen: ClientStack
  // },
  // Profile: {
  //   screen: ProfileStack
  // },
  // Settings: {
  //   screen: SettingsStack
  // }
});

export default Navigator;
