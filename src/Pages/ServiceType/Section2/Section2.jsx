import React from "react";
import "./Section2.css";

export default function Section2({ data }) {
  return (
    <section className="service-type-section-2 section">
      <div className="container flex-center g-50">
        <img src={data.imageSrc} alt="" loading="async" />
        <div className="content flex-column-start g-20">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
}
