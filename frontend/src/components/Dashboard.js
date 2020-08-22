import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Questions from "./Questions";
import Poll from "./Poll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <NavBar />
              <Questions />
            </Route>
            <Route
              path="/questions/:id"
              render={(renderProps) => {
                const question = Object.values(this.props.questions).find(
                  (question) => question.id === renderProps.match.params.id
                );
                return (
                  <div>
                    <NavBar />
                    <Poll {...renderProps} question={question} />;
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ questions }) {
  return {
    questions,
  };
}
export default connect(mapStateToProps)(Dashboard);
