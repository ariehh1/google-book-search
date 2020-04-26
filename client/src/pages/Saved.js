import React, { Component } from "react";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import Results from "../components/Results";
import ViewBtn from "../components/ViewBtn";
import DeleteBtn from "../components/DeleteBtn";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  searchDB = (query) => {
    API.getBooks(query)
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleBookSearch = (event) => {
    event.preventDefault();
    this.searchDB(this.state.search);
  };

  handleBookRemove = (event) => {
    API.deleteBook(event)
      .then((res) => this.searchDB(this.state.search))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Heading>
              <h1>Google Books Search</h1>
              <h3>Search Already Saved Books From Our Database</h3>
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <SearchBar>
              <h3>Search Saved Books by Title</h3>
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Enter the title of the book you are looking for"
                />
                <FormBtn
                  disabled={!this.state.search}
                  onClick={this.handleBookSearch}
                >
                  Search
                </FormBtn>
              </form>
            </SearchBar>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Results>
              <ul className="list-group">
                {this.state.results.map((result) => (
                  <li className="list-group-item" key={result._id}>
                    <Row>
                      <Col size="md-2">
                        <img
                          alt={result.title}
                          className="img-fluid"
                          src={result.imageurl}
                        />
                      </Col>
                      <Col size="md-9" className="text-justify">
                        <b>{result.title}</b>
                        <br />
                        {result.author}
                        <br />
                        {result.synopsis}
                      </Col>
                      <Col size="md-1">
                        <ViewBtn onClick={() => window.open(result.bookurl)} />
                        <DeleteBtn
                          onClick={() => this.handleBookRemove(result._id)}
                        />
                      </Col>
                    </Row>
                  </li>
                ))}
              </ul>
            </Results>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
