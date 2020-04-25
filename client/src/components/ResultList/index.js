import React from "react";
import { Col, Row } from "../Grid";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import API from "../utils/API";

function ResultList(props) {
  return (
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
                onClick={() => window.open(result.volumeInfo.previewLink)}
              />
              <SaveBtn />
            </Col>
          </Row>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
