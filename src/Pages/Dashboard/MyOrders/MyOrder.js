import React from "react";

const MyOrder = (props) => {
  const { _id, orderStatus, productName } = props.order;
  console.log(props.order);

  const handleOrderCancel = (id) => {
    const confirmation = window.confirm("Do you want to cancel?");
    if (confirmation) {
      fetch(`https://serene-anchorage-15140.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Cancelled!");
          }
        });
    }
  };
  return (
    <>
      <tr>
        <td>{productName}</td>
        <td>{orderStatus}</td>
        <td>
          <button onClick={() => handleOrderCancel(_id)}>Cancel</button>
        </td>
      </tr>
    </>
  );
};

export default MyOrder;
