import React, {Component} from "react";
import {Provider} from "react-redux";
import Navigator from "./Navigator";
import store from "./storeConfig";

export default class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
};
