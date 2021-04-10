import React, { useContext, useState } from "react";
import { NavBar, CCard } from "../components";
import books from "../dataset/book_set.json";
import { Container, Table, Col, Row, CarouselItem } from "react-bootstrap";
import styled from "styled-components";
import { Context } from "../providers";
import { useAlert } from "react-alert";
import CounterInput from "react-counter-input";
import { convertDollerValueTORupee, getTotalAmount } from "../helpers";

function Home() {
  const [count, setCount] = useState(1);
  const alert = useAlert();
  const { state, dispatch } = useContext(Context);
  const handleQuantity = (c, productId) => {
    let findProduct = state.cart.find((cc) => cc.id === productId);
    console.log(findProduct);
    findProduct.quantity = c;
    let findProductIndex = state.cart.findIndex((cc) => cc.id === productId);
    const carts = state.cart;
    carts[findProductIndex] = findProduct;
    dispatch({
      type: "carts",
      carts: carts,
    });
  };
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
  console.log("STATE", state.cart);
  return (
    <div className="App">
      <NavBar />
      <br />

      <Row>
        <Col sm={7}>
          <h3>All Products</h3>
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
          <h3>My Carts</h3>
          {state.cart.length > 0 ? (
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
                          onCountChange={(count) => handleQuantity(count, c.id)}
                        />
                      </td>
                      <td>
                        {(
                          convertDollerValueTORupee(c.price) * c.quantity
                        ).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Total Amount</th>
                  <th>{getTotalAmount(state.cart).toFixed(2)}</th>
                </tr>
              </tfoot>
            </Table>
          ) : (
            <p>Cart is empty</p>
          )}{" "}
        </Col>
      </Row>
    </div>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
