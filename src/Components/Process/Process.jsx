import React from "react";
import "./Process.css";

export default function Process({ data }) {
  return (
    <div className="process-item">
      <div className="top-text flex-center g-20">
        <span>{data.number}</span>
        <h5>{data.miniTitle}</h5>
      </div>
      <div className="main-content flex-center g-30">
        <div className="main-text">
          <h3>{data.title}</h3>
          <p>{data.paragraph}</p>
        </div>
        <img src={data.imgSrc} alt={data.imgAlt} />
      </div>
    </div>
  );
}
