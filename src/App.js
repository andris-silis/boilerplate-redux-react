import { Map } from "immutable";
import React, { Component } from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux-immutable";

import Layout from "./ui/layout/Layout";

import testModule from "./modules/module";


const createStoreWithMiddleware = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const combinedReducers = combineReducers({
  testValue: testModule,
});
const store = createStoreWithMiddleware(combinedReducers, Map());

if (process.env.NODE_ENV === "development") {
  window.store = store;
  window.dispatch = store.dispatch;
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
