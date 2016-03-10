import { Map } from "immutable";
import React, { Component } from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import centralReducer from "./central-reducer";
import Layout from "./ui/layout/Layout";


const createStoreWithMiddleware = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(centralReducer, Map());

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
