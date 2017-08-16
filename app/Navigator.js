import React from 'react';
import {DrawerNavigator, StackNavigator} from "react-navigation";
import {Button} from 'react-native';
import Dashboard from "./screens/Dashboard";
import DaySummary from "./screens/DaySummary";
import JobDetails from "./screens/JobDetails";
import Employees from "./screens/Employees";
import EmployeeSummary from "./screens/EmployeeSummary";
import Clients from "./screens/Clients";
import ClientSummary from "./screens/ClientSummary";
import SelectTemplate from "./screens/SelectTemplate";

//new set job stack
const NewSetJobStack = StackNavigator({
  SelectTemplate: {
    screen: SelectTemplate,
    navigationOptions: {
      title: 'New job'
    }
  },
  // SelectClient: {
  //   screen: SelectClient
  // },
  // SelectTask: {
  //   screen: SelectTask
  // },
  // SelectEmployee: {
  //   screen: SelectEmployee
  // }, 
});
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
//test stack MODAL navigator
const ModalStack = StackNavigator({
  Dashboard: {
    screen: DashboardStack,
    navigationOptions: {
      title: 'Dashboard'
    }
  },
  NewSetJob: {
    screen: NewSetJobStack
  }
},{
  mode: 'modal',
  headerMode: 'none'
})
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
  ClientSummary: {
    screen: ClientSummary,
    navigationOptions: {
      title: 'Client'
    }
  }
});

//root navigator
const Navigator = DrawerNavigator({
  Dashboard: {
    screen: ModalStack,
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
