import React, { Component } from "react";
import "../components/App.css";

class Poll extends Component {
  state = {};
  render() {
    return <div className="poll-container">{console.log(this.props)}</div>;
  }
}

export default Poll;
