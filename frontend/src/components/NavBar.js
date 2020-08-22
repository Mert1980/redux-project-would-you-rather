import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";

class NavBar extends Component {
  upperCase = (userName) => {
    return userName.charAt(0).toUpperCase() + userName.slice(1);
  };

  handleLogout = (e) => {
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    return (
      <div>
        <Container>
          <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Navbar.Brand>Would you rather?</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/add">New Poll</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/leaderboard">Leader Board</Link>
              </Nav.Link>
            </Nav>

            <Form inline>
              <Navbar.Text className="mr-sm-2">
                Signed in as: {this.upperCase(this.props.authedUser)}
              </Navbar.Text>
              <Button onClick={this.handleLogout} variant="outline-primary">
                Logout
              </Button>
            </Form>
          </Navbar>
        </Container>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);
