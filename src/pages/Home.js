import React, { useContext } from "react";
import { NavBar, CCard, CCardMini } from "../components";
import books from "../dataset/book_set.json";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Context } from "../providers";
import { useAlert } from "react-alert";

function Home() {
  const alert = useAlert();
  const { state, dispatch } = useContext(Context);
  const handleClickCart = (data) => {
    console.log("HELLO", state.cart.length);
    if (state.cart.length > 3) {
      alert.show("Sorry, you cann't add more than 5 books");
      return;
    }

    dispatch({
      type: "cart",
      value: data,
    });
  };
  console.log(state.cart.length);
  return (
    <div className="App">
      <NavBar />
      <br />
      <Container>
        <Row>
          <Col sm={9}>
            <CardContainer>
              {books.map((book) => {
                return <CCard handleClick={handleClickCart} data={book} />;
              })}
            </CardContainer>
          </Col>
          <Col>
            {state.cart.map((c) => {
              return <CCardMini data={c} />;
            })}
          </Col>
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
