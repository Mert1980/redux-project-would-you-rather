import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setAuthedUser } from "../actions/authedUser";
import { Link, useHistory } from "react-router-dom";

function NavBar(props) {
  let history = useHistory();

  const upperCase = (userName) => {
    return userName.charAt(0).toUpperCase() + userName.slice(1);
  };

  const handleLogout = (e) => {
    props.dispatch(setAuthedUser(null));
    history.push("/");
  };

  return (
    <div>
      <Container>
        <Navbar fixed="top" expand="lg" variant="light" bg="light">
          <Navbar.Brand>Would you rather?</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/add">New Poll</Link>
            <Link to="/leaderboard">Leader Board</Link>
          </Nav>

          <Form inline>
            <Navbar.Text className="mr-sm-2">
              Signed in as: {upperCase(props.authedUser)}
            </Navbar.Text>
            <Button onClick={handleLogout} variant="outline-primary">
              Logout
            </Button>
          </Form>
        </Navbar>
      </Container>
    </div>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);
