import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Home/Shared/Footer/Footer";
import Header from "../Home/Shared/Header/Header";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, signInWithGoogle } = useAuth();

  //google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  //handle input field
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  //submit button
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <>
      <Header></Header>
      <div className="bg-pc">
        {isLoading ? (
          <>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </>
        ) : (
          <>
            <div>
              <button
                className="custom-login mt-5"
                onClick={handleGoogleSignIn}
              >
                Google Registration
              </button>
              <form className="log-in" onSubmit={handleLoginSubmit}>
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
                <button className="log-in-btn mt-5" type="submit">
                  Login
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
