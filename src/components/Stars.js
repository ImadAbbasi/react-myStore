import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, reviews }) => {
  const star = Array.from({ length: 5 }, (element, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex gap-1">{star}</span>
        <p className="text-sm">({reviews}reviews)</p>
      </div>
    </div>
  );
};

export default Stars;
