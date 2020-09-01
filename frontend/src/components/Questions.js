import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "react-bootstrap/Card";
import "../components/App.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "50%",
    marginLeft: "25%",
  },
});

function QuestionTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="questions">
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Unanswered" />
          <Tab label="Answered" />
        </Tabs>
      </Paper>
      <div className="question-card">
        {console.log("1", Object.values(props.questions))}
        {console.log(
          "2",
          Object.values(props.questions).sort(
            (a, b) => b.timestamp - a.timestamp
          )
        )}

        {Object.values(props.questions)
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((question) => {
            return value === 1
              ? (question.optionOne.votes.includes(props.authedUser) ||
                  question.optionTwo.votes.includes(props.authedUser)) && (
                  <Card
                    key={question.id}
                    style={{
                      width: "18rem",
                      marginTop: "10px",
                      marginRight: "20px",
                      backgroundColor: "floralWhite",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={props.users[question.author].avatarURL}
                      style={{
                        width: "150px",
                        borderRadius: "5em",
                        marginTop: "10px",
                        marginLeft: "50px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>Would You Rather</Card.Title>
                      <Card.Text>{question.optionOne.text}</Card.Text>
                      <Card.Text>or…</Card.Text>
                      <NavLink to={`/questions/${question.id}`}>
                        Results
                      </NavLink>
                    </Card.Body>
                  </Card>
                )
              : value === 0 &&
                  !question.optionOne.votes.includes(props.authedUser) &&
                  !question.optionTwo.votes.includes(props.authedUser) && (
                    <Card
                      key={question.id}
                      style={{
                        width: "18rem",
                        marginTop: "10px",
                        marginRight: "20px",
                        backgroundColor: "floralWhite",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={props.users[question.author].avatarURL}
                        style={{
                          width: "150px",
                          borderRadius: "5em",
                          marginTop: "10px",
                          marginLeft: "50px",
                        }}
                      />
                      <Card.Body>
                        <Card.Title>Would You Rather</Card.Title>
                        <Card.Text>{question.optionOne.text}</Card.Text>
                        <Card.Text>or…</Card.Text>
                        <NavLink to={`/questions/${question.id}`}>
                          Answer Question
                        </NavLink>
                      </Card.Body>
                    </Card>
                  );
          })}
      </div>
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

export default connect(mapStateToProps)(QuestionTabs);
