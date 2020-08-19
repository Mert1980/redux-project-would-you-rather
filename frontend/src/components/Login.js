import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../components/App.css";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  state = {
    authedUser: "",
  };

  selectUser = (e) => {
    let user = e.target.value;
    console.log(user);
    this.setState(() => ({
      authedUser: user,
    }));
  };

  handleButton = (e) => {
    e.preventDefault();

    if (this.state.authedUser === "") {
      const defaultUser = Object.values(this.props.users)[0].id;
      this.props.dispatch(setAuthedUser(defaultUser));
    } else {
      this.props.dispatch(setAuthedUser(this.state.authedUser));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h4>Welcome to the Would You Rather App</h4>
          <p>Please sign in to continue</p>
        </div>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label>Sign in as...</Form.Label>
            <Form.Control
              onChange={this.selectUser}
              as="select"
              size="lg"
              custom
            >
              {Object.values(this.props.users).map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Button
            onClick={this.handleButton}
            type="submit"
            variant="primary"
            size="lg"
            block
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
