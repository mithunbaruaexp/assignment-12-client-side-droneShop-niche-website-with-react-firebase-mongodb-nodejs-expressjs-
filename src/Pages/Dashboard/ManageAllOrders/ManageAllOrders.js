import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import AllOrder from "./AllOrder";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  //delete orders
  useEffect(() => {
    const url = `http://localhost:5000/all-orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);
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
                  <th>Email</th>
                  <th>Status</th>
                  <th>Ship/Cancel</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order) => (
                  <AllOrder
                    order={order}
                    key={order._id}
                    allOrders={allOrders}
                  ></AllOrder>
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

export default ManageAllOrders;
