import React from "react";
import "./Reviewcard.css";

export default function ReviewCard({ data }) {
  return (
    <div className="review-item flex-column-center g-10">
      <img
        width="120"
        height="120"
        src={data.imgSrc}
        className="review-img"
        alt="client face"
        decoding="async"
      />

      <h4>{data.name}</h4>

      <p className="paragraph">{data.paragraph}</p>
    </div>
  );
}
