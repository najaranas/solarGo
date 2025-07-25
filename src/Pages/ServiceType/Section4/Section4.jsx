import React from "react";
import "./Section4.css";

export default function Section4({ data }) {
  return (
    <section className="service-type-section-4 section">
      <div className="container flex-center g-50">
        <div className="content flex-column-start g-20">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <a class="primary-btn flex-center g-10" href="/contact">
            <span>Devis Gratuit</span>
            <i class="fa-solid fa-caret-right "></i>
          </a>
        </div>
        <img src={data.imageSrc} alt="" loading="async" />
      </div>
    </section>
  );
}
