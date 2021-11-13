import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://serene-anchorage-15140.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <>
      <Container fluid>
        <Row className="broadcumb-area">
          <h4>All Orders</h4>
        </Row>
        <Row>
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-5 mb-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ManageProduct
                    product={product}
                    key={product._id}
                    products={products}
                  ></ManageProduct>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-md-2"></div>
        </Row>
      </Container>
    </>
  );
};

export default ManageProducts;
