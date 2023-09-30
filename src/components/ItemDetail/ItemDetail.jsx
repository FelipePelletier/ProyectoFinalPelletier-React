import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="cardContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.url} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Text>{data.price}</Card.Text>
        </Card.Body>
        <ItemCount />
      </Card>
    </div>
  );
};

export default ItemDetail;
