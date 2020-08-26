import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleSaveAnswer } from "../actions/saveAnswer";

import "../components/App.css";

class Poll extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.state = {
      checkedAnswer: "",
    };
  }

  onAnswerChanged(event) {
    this.setState({
      checkedAnswer: event.target.value,
    });
  }

  handleSubmitAnswer(answer, qid) {
    this.props.dispatch(handleSaveAnswer(answer, qid));
  }

  render() {
    console.log(this.props);
    return (
      <div className="poll-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.users[this.props.question.author].avatarURL}
          />
          <Card.Body>
            <Card.Title>Would You Rather</Card.Title>
            <Form>
              <Form.Check
                type="radio"
                label={this.props.question.optionOne.text}
                checked={this.state.checkedAnswer === "optionOne"}
                value="optionOne"
                onChange={(event) => this.onAnswerChanged(event)}
                name="option"
                id="optionOne"
              />
              <Form.Check
                type="radio"
                label={this.props.question.optionTwo.text}
                checked={this.state.checkedAnswer === "optionTwo"}
                value="optionTwo"
                onChange={(event) => this.onAnswerChanged(event)}
                name="option"
                id="optionTwo"
              />
            </Form>

            <Button
              onClick={() =>
                this.handleSubmitAnswer(
                  this.state.checkedAnswer,
                  this.props.question.id
                )
              }
            >
              Submit Answer
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Poll);
