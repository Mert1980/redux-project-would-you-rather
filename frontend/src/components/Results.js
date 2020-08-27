import React from "react";
import { connect } from "react-redux";
import { Grid, Image, Label, Segment } from "semantic-ui-react";

import "../components/App.css";

const ProgressBar = (props) => {
  let optionOneLength = props.question.optionOne.votes.length;
  let optionTwoLength = props.question.optionTwo.votes.length;
  let total = optionOneLength + optionTwoLength;

  let optionStyle = {
    backgroundColor: "rgb(183, 233, 169)",
    borderRadius: "1em",
  };

  return (
    <div>
      <div>
        <h3>{upperCase(props.question.author)} asks:</h3>
        <h4>Would you rather</h4>
      </div>
      <div style={props.checkedAnswer === "optionOne" ? optionStyle : {}}>
        {props.checkedAnswer === "optionOne" && <LabelRibbon />}
        <div className="option">
          <h5>{props.question.optionOne.text}</h5>
        </div>
        <div className="progress-bar">
          <Filler percentage={props.percentageOne} />
        </div>
        <div className="percentage-info">
          <h6>
            {optionOneLength} out of {total} questions
          </h6>
        </div>
      </div>
      <div style={props.checkedAnswer === "optionTwo" ? optionStyle : {}}>
        {props.checkedAnswer === "optionTwo" && <LabelRibbon />}
        <div className="option">
          <h5>{props.question.optionTwo.text}</h5>
        </div>
        <div className="progress-bar">
          <Filler percentage={props.percentageTwo} />
        </div>
        <div className="percentage-info">
          <h6>
            {optionTwoLength} out of {total} questions
          </h6>
        </div>
      </div>
    </div>
  );
};

const Filler = (props) => {
  return (
    <div className="filler" style={{ width: `${props.percentage}%` }}>
      {props.percentage}%
    </div>
  );
};

const LabelRibbon = () => (
  <Label as="a" color="orange" ribbon="right">
    Your Vote
  </Label>
);

const upperCase = (userName) => {
  return userName.charAt(0).toUpperCase() + userName.slice(1);
};

function Results(props) {
  let totalVotes =
    props.question.optionOne.votes.length +
    props.question.optionTwo.votes.length;

  let percentageOne = parseInt(
    (props.question.optionOne.votes.length / totalVotes) * 100
  );

  let percentageTwo = parseInt(
    (props.question.optionTwo.votes.length / totalVotes) * 100
  );

  return (
    <div className="results-container">
      <div className="results-container-header">
        <h2>Results:</h2>

        <img
          src={`${props.users[props.authedUser].avatarURL}`}
          alt="user avatar"
          style={{ width: "150px", borderRadius: "5em" }}
        />
      </div>

      <ProgressBar
        percentageOne={percentageOne}
        percentageTwo={percentageTwo}
        question={props.question}
        authedUser={props.authedUser}
        checkedAnswer={props.checkedAnswer}
      />
    </div>
  );
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Results);
