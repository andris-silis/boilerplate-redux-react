import { Map } from "immutable";
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import centralReducer from "./central-reducer";
import Layout from "./ui/layout/Layout";


const store = createStore(centralReducer, Map());

if (process.env.NODE_ENV === "development") {
  window.store = store;
}

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
