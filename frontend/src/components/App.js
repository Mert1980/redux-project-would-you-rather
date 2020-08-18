import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <div>Redux</div>;
  }
}

// function App() {
//   useEffect(() => {
//     props.dispatch(handleInitialData());
//   });

//   return <div>Redux</div>;
// }

export default connect()(App);
