import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/my-orders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders, user?.email]);

  return (
    <>
      <div className="my-order-wrapper">
        {myOrders.length === 0 ? (
          <>
            <h1>Your orders will be here!</h1>
          </>
        ) : (
          <>
            <Container>
              <Row className="broadcumb-area mt-5">
                <h4>My Orders</h4>
              </Row>
              <Row>
                <div className="col-md-2"></div>
                <div className="col-md-8 mt-5 mb-5 ctablewrapper">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Status</th>
                        <th>Cancel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myOrders.map((order) => (
                        <MyOrder order={order} key={order._id}></MyOrder>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="col-md-2"></div>
              </Row>
            </Container>
          </>
        )}
      </div>
    </>
  );
};

export default MyOrders;
