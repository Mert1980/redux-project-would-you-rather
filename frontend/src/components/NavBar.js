import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class NavBar extends Component {
  upperCase = (userName) => {
    return userName.charAt(0).toUpperCase() + userName.slice(1);
  };
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#home">Would you rather?</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">New Poll</Nav.Link>
              <Nav.Link href="#pricing">Leader Board</Nav.Link>
            </Nav>

            <Form inline>
              <Navbar.Text className="mr-sm-2">
                Signed in as: {this.upperCase(this.props.authedUser)}
              </Navbar.Text>
              <Button variant="outline-primary">Logout</Button>
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
