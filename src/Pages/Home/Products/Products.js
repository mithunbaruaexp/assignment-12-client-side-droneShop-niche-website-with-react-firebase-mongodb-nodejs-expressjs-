import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="section-title">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h2>Our Featured Drones</h2>
              <p>
                Build your BFT with Carmenta Engine. Supports MIL-STD-2525,
                APP6, terrain analysis
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>

      <div className="featured-product-area mt-5 mb-5">
        <div className="container">
          <div className="row">
            {products.length === 0 ? (
              <>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              <>
                {products.slice(0, 6).map((product) => (
                  <Product product={product} key={product._id}></Product>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
