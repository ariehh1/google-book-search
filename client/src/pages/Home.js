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
                alt="[]"
                src={require("./bookgallery.jpeg")}
                style={{ height: 300, margin: 0 }}
              />
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <br />
              <h1>Welcome to the Google Book Search </h1>
              <br />
              <p className="container text-justify">
                In this application, you will be able to search by a book's
                title from the robust selection of a Google Books Database and
                save them directly. You can also search the database for already
                saved books to view the synopsis and selectively delete books
                that you've already read.
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
