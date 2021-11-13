import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import BreadCumbs from "../BreadCumbs/BreadCumbs";
import Footer from "../Home/Shared/Footer/Footer";
import Header from "../Home/Shared/Header/Header";
import "./Registration.css";

const Registration = () => {
  const { registerUser, isLoading, signInWithGoogle } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const [loginData, setLoginData] = useState({});

  //google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.confirmpassword) {
      alert("Password did not match");
      return;
    }

    registerUser(loginData.name, loginData.email, loginData.password, history);
  };

  return (
    <>
      <Header></Header>
      <BreadCumbs explore={"Register now"}></BreadCumbs>

      <div className="bg-registration">
        {isLoading ? (
          <>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </>
        ) : (
          <>
            <button className="registration-btn" onClick={handleGoogleSignIn}>
              Google Registration
            </button>
            <form className="registration-form" onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleOnChange}
              />
              <input
                type="emai"
                name="email"
                placeholder="Your Email"
                onChange={handleOnChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Set Password"
                onChange={handleOnChange}
              />
              <input
                type="password"
                name="confirmpassword"
                placeholder="Re-type Password"
                onChange={handleOnChange}
              />
              <button className="registration-btn" type="submit">
                Register
              </button>
            </form>
            <NavLink className="goto-account" to="/login">
              Already have an account?
            </NavLink>

            {/* <Link> Already have an account?</Link> */}
          </>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Registration;
