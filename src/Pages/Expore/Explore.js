import React, { useEffect, useState } from "react";
import BreadCumbs from "../BreadCumbs/BreadCumbs";
import Product from "../Home/Products/Product";
import Footer from "../Home/Shared/Footer/Footer";
import Header from "../Home/Shared/Header/Header";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://serene-anchorage-15140.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Header></Header>
      <BreadCumbs explore={"Our Products"}></BreadCumbs>

      <div className="featured-product-area mt-5 mb-5">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
