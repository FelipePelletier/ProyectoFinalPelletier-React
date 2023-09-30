import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="cardContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.url} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate("/detail/" + item.id)}
          >
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
