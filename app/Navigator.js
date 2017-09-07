import React from 'react'
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import {Button} from 'react-native'
import Dashboard from './screens/Dashboard'
import DaySummary from './screens/DaySummary'
import JobDetails from './screens/JobDetails'
import Employees from './screens/Employees'
import EmployeeSummary from './screens/EmployeeSummary'
import Clients from './screens/Clients'
import ClientSummary from './screens/ClientSummary'
import SelectTemplate from './screens/SelectTemplate'
import SelectClient from './screens/SelectClient'
import SelectTask from './screens/SelectTask'
import SelectEmployee from './screens/SelectEmployee'
import SetTitleAndComment from './screens/SetTitleAndComment'
import ConfirmNewJob from './screens/ConfirmNewJob'
import ConfirmNewJob_fromTemplate from './screens/ConfirmNewJob_fromTemplate'
import SelectEmployee_fromTemplate from './screens/SelectEmployee_fromTemplate'
import SelectTask_fromTemplate from './screens/SelectTask_fromTemplate'
import SetComment_fromTemplate from './screens/SetComment_fromTemplate'
import SelectEmployee_fromSetJob from './screens/SelectEmployee_fromSetJob'
import SelectTask_fromSetJob from './screens/SelectTask_fromSetJob'
import SetComment_fromSetJob from './screens/SetComment_fromSetJob'
import DismissableStackNavigator from './components/DismissableStackNavigator'

//new set job stack (created with customize component(navigator))
const NewSetJobStack = DismissableStackNavigator({
  SelectTemplate: {
    screen: SelectTemplate,
  },
  SelectClient: {
    screen: SelectClient
  },
  SelectTask: {
    screen: SelectTask
  },
  SelectEmployee: {
    screen: SelectEmployee
  },
  SetTitleAndComment: {
    screen: SetTitleAndComment
  },
  ConfirmNewJob: {
    screen: ConfirmNewJob
  },
  ConfirmNewJob_fromTemplate: {
    screen: ConfirmNewJob_fromTemplate
  },
  SelectEmployee_fromTemplate: {
    screen: SelectEmployee_fromTemplate
  },
  SelectTask_fromTemplate: {
    screen: SelectTask_fromTemplate
  },
  SetComment_fromTemplate: {
    screen: SetComment_fromTemplate
  }
});
//edit set job stack
const EditSetJobStack = DismissableStackNavigator({
  SelectEmployee_fromSetJob: {
    screen: SelectEmployee_fromSetJob
  },
  SelectTask_fromSetJob: {
    screen: SelectTask_fromSetJob
  },
  SetComment_fromSetJob: {
    screen: SetComment_fromSetJob
  }
})
//dashboard stack navigator
const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  DaySummary: {
    screen: DaySummary
  },
  JobDetails: {
    screen: JobDetails
  }
});
//Main Staack contains Dashboard Stack and NewSetJob Stack
const MainStack = StackNavigator({
  Dashboard: {
    screen: DashboardStack,
    navigationOptions: {
      title: 'Dashboard'
    }
  },
  NewSetJob: {
    screen: NewSetJobStack
  },
  EditSetJob: {
    screen: EditSetJobStack
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
    screen: MainStack,
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
