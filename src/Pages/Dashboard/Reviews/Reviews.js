import React, { useRef } from "react";
import useAuth from "../../../hooks/useAuth";
import "./Reviews.css";

const Reviews = () => {
  const { user } = useAuth();
  const reivewTextRef = useRef("");
  const ratingNumberRef = useRef("");

  const hanldeOnReviewSubmit = (e) => {
    e.preventDefault();

    const reviewer = user?.displayName;
    const reivewText = reivewTextRef.current.value;
    const ratingNumber = ratingNumberRef.current.value;

    if (parseInt(ratingNumber) < 0 || parseInt(ratingNumber) > 5) {
      alert("Rating number should be 1 to 5");
      return;
    }

    const newRating = { reviewer, reivewText, ratingNumber };

    //saving review
    fetch("https://serene-anchorage-15140.herokuapp.com/ratings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRating),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Published!");
          reivewTextRef.current.value = "";
          ratingNumberRef.current.value = "";
        }
      });
  };

  return (
    <>
      <div className="dashboard-reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form onSubmit={hanldeOnReviewSubmit}>
                <textarea
                  required
                  ref={reivewTextRef}
                  name=""
                  placeholder="Write review"
                ></textarea>
                <input
                  required
                  ref={ratingNumberRef}
                  type="number"
                  placeholder="Put ratings out of 5"
                />
                <input type="submit" value="Leave Review" />
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
