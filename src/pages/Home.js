import React from "react";
import { NavBar, CCard } from "../components";
import books from "../dataset/book_set.json";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Container>
        <Row>
          <Col sm={9}>
            <CardContainer>
              {books.map((book) => {
                return <CCard data={book} />;
              })}
            </CardContainer>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
