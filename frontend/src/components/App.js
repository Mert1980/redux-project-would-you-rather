import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App(props) {
  return (
    <div>
      {props.authedUser === null ? (
        <div>
          <Login />
        </div>
      ) : (
        <>
          <Dashboard />
        </>
      )}
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
