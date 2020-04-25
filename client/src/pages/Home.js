import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <img
                className="img-fluid"
                src={require("./bookgallery.jpeg")}
                style={{ height: 300, margin: 0 }}
              />
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <br />
              <h1>Welcome to Google Books Search App</h1>
              <br />
              <p className="container text-justify">
                Here you will be able to search by a Book's title from the vast
                selection of Google Books Database and selectively save them in
                our database. You can also search our database for already saved
                books to view the synopsis and selectively delete books that are
                irrevant.
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
