import React from "react";
import { connect } from "react-redux";
import { Card, Image, Label } from "semantic-ui-react";

const LabelRibbon = (props) => {
  function applyStyle() {
    switch (props.index + 1) {
      case 1:
        return "orange";
      case 2:
        return "blue";
      case 3:
        return "pink";
      default:
        return "";
    }
  }
  return (
    <Label as="a" color={applyStyle()} ribbon="right">
      Number {props.index + 1}
    </Label>
  );
};

function Leaderboard(props) {
  function arrangeSequence() {
    let users = Object.values(props.users);

    for (let i = 1; i < users.length; i++) {
      if (
        Object.keys(users[i - 1].answers).length +
          users[i - 1].questions.length <
        Object.keys(users[i].answers).length + users[i].questions.length
      ) {
        let removed = users.splice(i, 1);
        users.splice(i - 1, 0, removed[0]);
      }
    }
    return users;
  }

  return (
    <div>
      <div className="leaderboard-container-header">
        <h2>Leader Board</h2>
      </div>
      <div className="leaderboard-container">
        {arrangeSequence().map((user, index) => (
          <div className="leaderboard-container-card" key={user.id}>
            <Card>
              <Image src={user.avatarURL} wrapped ui={false} />
              <LabelRibbon index={index} />
              <Card.Content>
                <Card.Header style={{ backgroundColor: "none" }}>
                  {user.name}
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  Answered questions: {Object.keys(user.answers).length}
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  Created questions: {user.questions.length}
                </Card.Description>
              </Card.Content>
              <Card.Content style={{ backgroundColor: "lightgray" }}>
                <Card.Description>
                  Total Scrore:{" "}
                  {Object.keys(user.answers).length + user.questions.length}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}
export default connect(mapStateToProps)(Leaderboard);
