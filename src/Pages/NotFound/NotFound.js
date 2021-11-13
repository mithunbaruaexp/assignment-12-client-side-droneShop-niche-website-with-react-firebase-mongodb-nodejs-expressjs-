import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <img
        src="https://i.ibb.co/yd3pQfw/126008313-modern-robotic-vector-illustration-web-background-with-cool-smart-autonomous-robot-drone-i.jpg"
        alt=""
      />
      <NavLink className="return-home" to="/home">
        Return home
      </NavLink>
    </div>
  );
};

export default NotFound;
