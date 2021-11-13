import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { _id, title, img, price, details } = props.product;
  return (
    <>
      <div className="col-md-4 mb-4">
        <Card>
          <div className="product-img">
            <Card.Img variant="top" src={img} /> <span>${price}</span>
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details.slice(0, 250)}</Card.Text>
            <NavLink to={`/orderPlace/${_id}`}>
              <Button variant="primary">Purchase Now</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Product;
