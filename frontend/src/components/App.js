import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div>{this.props.authedUser === null ? <Login /> : <Dashboard />}</div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
