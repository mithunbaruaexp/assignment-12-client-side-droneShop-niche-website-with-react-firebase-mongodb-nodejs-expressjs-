import React from "react";
import Rating from "react-rating";

const Review = (props) => {
  const { ratingNumber, reivewText, reviewer } = props.rating;
  return (
    <div>
      <div className="single-slider">
        <h3>
          <Rating
            initialRating={ratingNumber}
            readonly
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
          />
        </h3>
        <p>{reivewText}</p>
        <h5>{reviewer}</h5>
      </div>
    </div>
  );
};

export default Review;
