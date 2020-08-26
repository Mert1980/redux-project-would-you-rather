import React, { useState } from "react";
import { connect } from "react-redux";
import "../components/App.css";

function Results() {
  return <div className="results-container">Results</div>;
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Results);
