import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Registration from "./Pages/Login/Registration";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Expore/Explore";
import OrderPlace from "./Pages/OrderPlace/OrderPlace";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/orderPlace/:id">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <PrivateRoute exact path="/singleproduct">
              <SingleProduct></SingleProduct>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
