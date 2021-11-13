import React from "react";
import "./AllOrder.css";

const AllOrder = (props) => {
  const { _id, productName, email, orderStatus } = props.order;
  // console.log(props.allOrders);
  const handleOrderDelete = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      fetch(`https://serene-anchorage-15140.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("cancelled!!");
          }
        });
    }
  };
  const handleShippingApproval = (id) => {
    const confirmation = window.confirm("Are you sure to ship this product?");

    if (confirmation) {
      const orderStatus = "Shipped";

      const toBeUpdated = props.allOrders.find((order) => order._id === id);

      const updatedData = { ...toBeUpdated, orderStatus };

      const url = `https://serene-anchorage-15140.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("Product is on the way for shipping");
          }
        });
    }
  };
  return (
    <>
      <tr style={{ height: "5px" }}></tr>
      <tr className="bg-white text-black pt-1 pb-1">
        <td>{productName}</td>
        <td>{email}</td>
        <td className="font-bold">{orderStatus}</td>
        <td className="text-right">
          <button
            onClick={() => handleShippingApproval(_id)}
            className="approve-btn mr-2"
          >
            Approve
          </button>
          <button
            onClick={() => handleOrderDelete(_id)}
            className="cancel-btn "
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllOrder;
