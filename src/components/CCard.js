import moment from "moment";
import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { convertDollerValueTORupee } from "../helpers";

const CCard = ({
  data: { id, name, image, price, stock, published_date, author, genre },
}) => {
  return (
    <Card style={{ width: "15rem", margin: 6 }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{convertDollerValueTORupee(price)}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Stock: {stock}</ListGroupItem>
        <ListGroupItem>
          {moment(published_date).format("DD-MM-YYYY")}
        </ListGroupItem>
        <ListGroupItem>{author}</ListGroupItem>
        <ListGroupItem>{genre}</ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <Button variant="primary">Add to cart</Button>
      </Card.Footer>
    </Card>
  );
};
export default CCard;
