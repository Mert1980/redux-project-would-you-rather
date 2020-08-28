import React from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  GridRow,
} from "semantic-ui-react";

const NewPoll = () => (
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
          <Form.Input placeholder="Enter option one…" type="text" />
        </Form>
      </GridRow>
      <Divider horizontal>Or</Divider>
      <GridRow>
        <Form>
          <Form.Input placeholder="Enter option two…" type="text" />
        </Form>
      </GridRow>
      <GridRow>
        <Form>
          <Button content="Save Question" primary />
        </Form>
      </GridRow>
    </Grid>
  </Segment>
);

export default NewPoll;
