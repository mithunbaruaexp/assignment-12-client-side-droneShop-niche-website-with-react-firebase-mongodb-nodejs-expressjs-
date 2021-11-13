import React from "react";

const ManageProduct = (props) => {
  const { _id, title, price } = props.product;

  // console.log(props.allOrders);
  const handleProductDelete = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      fetch(`https://serene-anchorage-15140.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product has been deleted!!");
          }
        });
    }
  };

  return (
    <>
      <tr style={{ height: "5px" }}></tr>
      <tr className="">
        <td className="">{title}</td>
        <td className="">{price}</td>
        <td className="">
          <button onClick={() => handleProductDelete(_id)} className="">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageProduct;
