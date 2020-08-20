import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

      {Object.values(props.questions).map((question) => {
        return (
          <Card key={question.id} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={props.users[question.author].avatarURL}
            />
            <Card.Body>
              <Card.Title>Would You Rather</Card.Title>
              <Card.Text>{question.optionOne.text}</Card.Text>
              <Card.Text>or…</Card.Text>
              <Button variant="primary">Answer Question</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions,
  };
}

export default connect(mapStateToProps)(QuestionTabs);
