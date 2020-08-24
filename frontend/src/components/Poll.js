import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "../components/App.css";

class Poll extends Component {
  state = {};
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
                name="option"
                id="optionOne"
              />
              <Form.Check
                type="radio"
                label={this.props.question.optionTwo.text}
                name="option"
                id="optionTwo"
              />
            </Form>

            <NavLink to="/">Submit Answer</NavLink>
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
