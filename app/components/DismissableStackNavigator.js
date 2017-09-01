import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {resetJobData} from '../actions/newJob'
import {resetEditJob} from '../actions/editSetJob'
import {resetClientSearchBar} from '../actions/clients'
import {resetTaskSearchBar} from '../actions/tasks'
import {resetEmployeeSearchBar} from '../actions/employees'
import store from '../storeConfig'

export default DismissableStackNavigator = (routes, options) => {
  const StackNav = StackNavigator(routes, options)

  return class DismissableStackNav extends Component {
    static router = StackNav.router

    componentWillUnmount() {
      store.dispatch(resetJobData())
      store.dispatch(resetEditJob())
      store.dispatch(resetClientSearchBar())
      store.dispatch(resetTaskSearchBar())
      store.dispatch(resetEmployeeSearchBar())
    }

    render() {
      const {state, goBack} = this.props.navigation
      const nav = {
        ...this.props.navigation,
        dismiss: () => goBack(state.key)
      }

      return(
        <StackNav navigation={nav} />
      )
    }
  }
};
