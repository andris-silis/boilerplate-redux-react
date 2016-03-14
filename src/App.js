import { Map } from "immutable";
import React, { Component } from "react";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { combineReducers } from "redux-immutable";
import createLogger from "redux-logger";

import Layout from "./ui/layout/Layout";

import testReducer from "./modules/module";
import * as testModule from "./modules/module";
import thunkReducer from "./modules/thunk";
import * as thunkModule from "./modules/thunk";


const logger = createLogger();
const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const combinedReducers = combineReducers({
  testValue: testReducer,
  thunkValue: thunkReducer,
});
const store = createStoreWithMiddleware(
  combinedReducers,
  Map()
);

if (process.env.NODE_ENV === "development") {
  window.store = store;
  window.dispatch = store.dispatch;
  window.actionCreators = {};
  window.actionCreators.thunkModule = thunkModule;
  window.actionCreators.testModule = testModule;
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
