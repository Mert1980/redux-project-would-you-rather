import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  GridRow,
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { handleAddQuestion } from "../actions/addQuestion";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
};

function NewPoll(props) {
  let history = useHistory();

  const optionOne = useInput("");
  const optionTwo = useInput("");

  const handleSaveButton = (e) => {
    e.preventDefault();
    props.dispatch(handleAddQuestion(optionOne.value, optionTwo.value));
    history.push("/");
  };

  return (
    <Segment
      placeholder
      // style={{ alignItems: "center", width: "800px", margin: "5% 25%" }}
    >
      <Grid rows={5}>
        <GridRow className="header-poll">
          <h2>Create New Poll</h2>
        </GridRow>
        <GridRow>
          <h4>Would you rather?</h4>
        </GridRow>
        <GridRow>
          <Form>
            <Form.Input
              onChange={optionOne.onChange}
              value={optionOne.value}
              placeholder="Enter option one…"
              type="text"
            />
          </Form>
        </GridRow>
        <Divider horizontal>Or</Divider>
        <GridRow>
          <Form>
            <Form.Input
              onChange={optionTwo.onChange}
              value={optionTwo.value}
              placeholder="Enter option two…"
              type="text"
            />
          </Form>
        </GridRow>
        <GridRow>
          <Form>
            <Button
              onClick={handleSaveButton}
              content="Save Question"
              primary
            />
          </Form>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default connect()(NewPoll);
