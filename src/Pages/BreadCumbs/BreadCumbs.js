import React from "react";
import "./Bread.css";
const BreadCumbs = (props) => {
  return (
    <>
      <div className="bread-wrapper">
        <h2>{props.explore}</h2>
      </div>
    </>
  );
};

export default BreadCumbs;
