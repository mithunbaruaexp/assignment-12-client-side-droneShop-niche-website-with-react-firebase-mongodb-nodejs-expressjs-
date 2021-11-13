import React, { useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const user = { email };
    const confirmation = window.confirm("Are you aware?");

    if (confirmation) {
      fetch("https://serene-anchorage-15140.herokuapp.com/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("Done");
            setEmail("");
          }
        });
    }
  };
  return (
    <>
      <div className="make-admin-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="admin-wrapper">
                <form onSubmit={handleFormSubmit}>
                  <input
                    required
                    onBlur={handleOnBlur}
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    defaultValue={email}
                  />
                  <button className="add-admin">Add as Admin</button>
                </form>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
