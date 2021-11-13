import "./AddProduct.css";
import React, { useRef } from "react";

const AddAProduct = () => {
  const titleRef = useRef("");
  const detailsRef = useRef("");
  const priceRef = useRef("");
  const brandRef = useRef("");
  const modelRef = useRef("");
  const imgRef = useRef("");

  const handleAddNewProduct = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const details = detailsRef.current.value;
    const price = priceRef.current.value;
    const brand = brandRef.current.value;
    const model = modelRef.current.value;
    const img = imgRef.current.value;

    const newProduct = { title, details, price, brand, model, img };

    //send product to database
    fetch("https://serene-anchorage-15140.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Product Added");

          titleRef.current.value = "";
          detailsRef.current.value = "";
          priceRef.current.value = "";
          brandRef.current.value = "";
          modelRef.current.value = "";
          imgRef.current.value = "";
        }
      });
  };
  return (
    <>
      <div className="add-a-product">
        <h1>Add new product</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form onSubmit={handleAddNewProduct}>
                <input
                  required
                  ref={titleRef}
                  type="text"
                  name="title"
                  placeholder="Prodcut Title"
                />

                <textarea
                  required
                  ref={detailsRef}
                  name="details"
                  placeholder="Prodcut Details"
                ></textarea>

                <input
                  required
                  type="text"
                  name="price"
                  ref={priceRef}
                  placeholder="Prodcut Price"
                />

                <input
                  required
                  ref={brandRef}
                  type="text"
                  name="brand"
                  placeholder="Product Brand"
                />
                <input
                  required
                  ref={modelRef}
                  type="text"
                  name="model"
                  placeholder="Product Model"
                />
                <input
                  required
                  ref={imgRef}
                  type="text"
                  name="img"
                  placeholder="image link"
                />
                <button className="add-product" type="submit">
                  Add Product
                </button>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAProduct;
