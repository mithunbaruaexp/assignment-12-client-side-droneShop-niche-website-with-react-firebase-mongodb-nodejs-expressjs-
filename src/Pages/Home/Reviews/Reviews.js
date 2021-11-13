import React, { useEffect, useState } from "react";
// import { Carousel } from "@trendyol-js/react-carousel";
import "./Reviews.css";
import Review from "./Review";
// import Review from "./Review";

const Reviews = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("https://serene-anchorage-15140.herokuapp.com/ratings")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, [ratings]);
  return (
    <>
      <div className="review-all">
        <h4>What our buyer says?</h4>
        <div className="all-reviews">
          {ratings.map((rating) => (
            <Review rating={rating} key={rating._id}></Review>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
