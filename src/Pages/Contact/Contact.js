import React from "react";
import BreadCumbs from "../BreadCumbs/BreadCumbs";
import Footer from "../Home/Shared/Footer/Footer";
import Header from "../Home/Shared/Header/Header";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <BreadCumbs explore={"Contact us"}></BreadCumbs>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
