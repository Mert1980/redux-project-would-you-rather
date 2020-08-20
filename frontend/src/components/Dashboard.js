import React, { Component } from "react";
import NavBar from "./NavBar";
import Questions from "./Questions";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Questions />
      </div>
    );
  }
}

export default Dashboard;
