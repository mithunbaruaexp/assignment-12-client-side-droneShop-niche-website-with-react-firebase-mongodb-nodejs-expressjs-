import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";
import Dashboardhome from "./Dashboardhome";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import Reviews from "../Reviews/Reviews";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddAProduct from "../AddAProduct/AddAProduct";
import ManageProducts from "../ManageProducts/ManageProducts";

const Dashboard = () => {
  const { user, logout, admin } = useAuth();

  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-logo">
          <NavLink to="/">
            <img src="https://i.ibb.co/44vXvNm/logo-black-footer.png" alt="" />
          </NavLink>
        </div>
        <Navbar className="" expand="lg">
          <Container className="ccontainer">
            <Row>
              <div className="col-md-12">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0">
                    {admin ? (
                      <>
                        <NavLink to={`${url}/manage-all-orders`}>
                          Manage All Orders
                        </NavLink>
                        <NavLink to={`${url}/add-a-product`}>
                          Add A Product
                        </NavLink>
                        <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                        <NavLink to={`${url}/manage-products`}>
                          Manage Products
                        </NavLink>
                        <button className="user-out" onClick={logout}>
                          {user?.displayName} Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to={`${url}`}>My Orders </Link>
                        <NavLink to={`${url}/payment`}>Pay</NavLink>
                        <NavLink to={`${url}/review`}>Review</NavLink>
                        <button className="user-out" onClick={logout}>
                          {user?.displayName} Logout
                        </button>
                      </>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Row>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path={path}>
            <Dashboardhome></Dashboardhome>
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Reviews></Reviews>
          </Route>

          <AdminRoute path={`${path}/manage-all-orders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/add-a-product`}>
            <AddAProduct></AddAProduct>
          </AdminRoute>

          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manage-products`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
      </div>
    </>
  );
};

export default Dashboard;
