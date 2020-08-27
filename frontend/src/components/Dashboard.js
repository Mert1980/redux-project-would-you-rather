import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Questions from "./Questions";
import Poll from "./Poll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Results from "./Results";

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
                console.log("question", question);
                const isAnswered =
                  question.optionOne.votes.includes(this.props.authedUser) ||
                  question.optionTwo.votes.includes(this.props.authedUser);

                console.log(isAnswered);

                let selectedOption = "";
                if (isAnswered) {
                  question.optionOne.votes.includes(this.props.authedUser)
                    ? (selectedOption = "optionOne")
                    : (selectedOption = "optionTwo");
                }

                return (
                  <div>
                    <NavBar />
                    {isAnswered ? (
                      <Results
                        question={question}
                        checkedAnswer={selectedOption}
                      />
                    ) : (
                      <Poll {...renderProps} question={question} />
                    )}
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
function mapStateToProps({ questions, authedUser }) {
  return {
    questions,
    authedUser,
  };
}
export default connect(mapStateToProps)(Dashboard);
