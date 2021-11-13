import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import BreadCumbs from "../BreadCumbs/BreadCumbs";
import Header from "../Home/Shared/Header/Header";
import "./OrderPlace.css";

const OrderPlace = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { user } = useAuth();

  const primaryOrderInfo = {
    productName: product?.title,
    name: user?.displayName,
    email: user?.email,
  };
  const [orderInfo, setOrderInfo] = useState(primaryOrderInfo);

  //all products
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //finding specific product
  useEffect(() => {
    const result = products.find((product) => product._id === id);
    setProduct(result);
  }, [id, products]);

  //handle form
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newOrderInfo = { ...primaryOrderInfo };
    newOrderInfo[field] = value;
    setOrderInfo(newOrderInfo);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    //orders
    const orders = {
      ...orderInfo,
      orderStatus: "pending",
    };

    //send orders to server
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Done");
        }
      });
  };
  return (
    <>
      <Header></Header>
      <BreadCumbs explore={"One step ahead"}></BreadCumbs>
      <div className="order-place-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="order-wrap">
                <div className="img-wrap">
                  <img src={product?.img} alt="" />
                </div>
                <div className="product-detailss">
                  <h3>{product?.title}</h3>
                  <p>{product?.details}</p>
                  <h6>Price: {product?.price}</h6>
                  <h6>Brand: {product?.brand}</h6>
                  <h6>Model: {product?.model}</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="order-place-form">
                <form onSubmit={handlePlaceOrder}>
                  <input
                    required
                    type="text"
                    name="name"
                    onChange={handleOnBlur}
                    defaultValue={user?.displayName}
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    onChange={handleOnBlur}
                    defaultValue={user?.email}
                  />

                  <input
                    required
                    type="number"
                    name="phone"
                    onChange={handleOnBlur}
                    placeholder="Your Phone Number"
                  />
                  <input
                    required
                    type="text"
                    name="address"
                    onChange={handleOnBlur}
                    placeholder="You Address"
                  />
                  <input type="submit" value="Purchase" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPlace;
