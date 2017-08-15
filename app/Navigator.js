import React from 'react';
import {DrawerNavigator, StackNavigator} from "react-navigation";
import {Button} from 'react-native';
import Dashboard from "./screens/Dashboard";
import DaySummary from "./screens/DaySummary";
import JobDetails from "./screens/JobDetails";
import Employees from "./screens/Employees";
import EmployeeSummary from "./screens/EmployeeSummary";
import Clients from "./screens/Clients";

//dashboard stack navigator
const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard'
    }
  },
  DaySummary: {
    screen: DaySummary
  },
  JobDetails: {
    screen: JobDetails
  }
});
//employees stack navigator
const EmployeeStack = StackNavigator({
  Employees: {
    screen: Employees,
    navigationOptions: {
      title: 'Employees'
    }
  },
  EmployeeSummary: {
    screen: EmployeeSummary,
    navigationOptions: {
      title: 'Employee Summary'
    }
  }
});
//clients stack navigator
const ClientStack = StackNavigator({
  Clients: {
    screen: Clients,
    navigationOptions: {
      title: 'Clients'
    }
  },
  // ClientSummary: {
  //   screen: ClientSummary,
  //   navigationOptions: {
  //     title: 'Client Summary'
  //   }
  // }
});

//root navigator
const Navigator = DrawerNavigator({
  Dashboard: {
    screen: DashboardStack,
    navigationOptions: {
      drawerLabel: 'Dashboard'
    }
  },
  Employees: {
    screen: EmployeeStack,
    navigationOptions: {
      drawerLabel: 'Employee'
    }
  },
  Clients: {
    screen: ClientStack
  },
  // Profile: {
  //   screen: ProfileStack
  // },
  // Settings: {
  //   screen: SettingsStack
  // }
});

export default Navigator;
