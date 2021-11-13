import React from "react";
import useAuth from "../../../hooks/useAuth";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";

const Dashboardhome = () => {
  const { admin } = useAuth();
  return (
    <div>
      {admin ? (
        <>
          <ManageAllOrders></ManageAllOrders>
        </>
      ) : (
        <>
          <MyOrders></MyOrders>
        </>
      )}
    </div>
  );
};

export default Dashboardhome;
