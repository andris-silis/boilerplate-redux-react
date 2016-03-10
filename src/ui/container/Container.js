import * as React from "react";
import { connect } from "react-redux";


class Container extends React.Component {
  render() {
    return (
      <div>testValue: {this.props.testValue}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    testValue: state.get("testValue"),
  };
}

export default connect(mapStateToProps)(Container);
