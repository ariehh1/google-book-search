import React, { Component } from "react";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import Results from "../components/Results";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  searchGoogle = (query) => {
    let query1 = query.replace(" ", "+");
    console.log("1. " + query1);
    API.search(query1)
      .then((res) => this.setState({ results: res.data.items, search: "" }))
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
    this.searchGoogle(this.state.search);
  };

  handleBookSave = (event) => {
    API.saveBook({
      title: event.volumeInfo.title,
      author: event.volumeInfo.authors[0],
      synopsis: event.volumeInfo.description,
      imageurl: event.volumeInfo.imageLinks.thumbnail,
      bookurl: event.volumeInfo.previewLink,
    })
      .then((res) => this.setState({ search: "" }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Heading>
              <h1>Google Books Search</h1>
              <h3>Search for and Save Books of interest</h3>
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <SearchBar>
              <h3>Search by Book Title</h3>
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
                  <li className="list-group-item" key={result.id}>
                    <Row>
                      <Col size="md-2">
                        <img
                          alt={result.volumeInfo.title}
                          className="img-fluid"
                          src={result.volumeInfo.imageLinks.thumbnail}
                        />
                      </Col>
                      <Col size="md-9" className="text-justify">
                        <b>{result.volumeInfo.title}</b>
                        <br />
                        {result.volumeInfo.authors}
                        <br />
                        {result.volumeInfo.description}
                      </Col>
                      <Col size="md-1">
                        <ViewBtn
                          onClick={() =>
                            window.open(result.volumeInfo.previewLink)
                          }
                        />
                        <SaveBtn onClick={() => this.handleBookSave(result)} />
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
