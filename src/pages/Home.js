import React, { useContext, useState } from "react";
import { NavBar, CCard } from "../components";
import books from "../dataset/book_set.json";
import { Container, Table, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Context } from "../providers";
import { useAlert } from "react-alert";
import CounterInput from "react-counter-input";
import { convertDollerValueTORupee } from "../helpers";

function Home() {
  const [count, setCount] = useState(1);
  const alert = useAlert();
  const { state, dispatch } = useContext(Context);
  const handleClickCart = (data) => {
    if (state.cart.length > 4) {
      alert.show("Sorry, you cann't add more than 5 books");
      return;
    }
    dispatch({
      type: "cart",
      value: {
        ...data,
        quantity: count,
      },
    });
  };
  return (
    <div className="App">
      <NavBar />
      <br />
      <Container>
        <Row>
          <Col sm={7}>
            <CardContainer>
              {books.map((book) => {
                return (
                  <CCard
                    setCount={setCount}
                    handleClick={handleClickCart}
                    data={book}
                    disabled={count > book.stock}
                  />
                );
              })}
            </CardContainer>
          </Col>
          <Col sm={5}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {state.cart.map((c, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={c.image}
                          style={{
                            width: 30,
                            height: 30,
                          }}
                        />
                      </td>
                      <td>{c.name}</td>
                      <td>
                        <CounterInput
                          min={1}
                          count={c.quantity}
                          max={10}
                          onCountChange={(count) => console.log(count)}
                        />
                      </td>
                      <td>{convertDollerValueTORupee(c.price) * c.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
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
