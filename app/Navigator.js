import {DrawerNavigator, StackNavigator} from "react-navigation";
import Dashboard from "./screens/Dashboard";

//dashboard stack navigator
const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Dashboard
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

module.exports = Navigator;
