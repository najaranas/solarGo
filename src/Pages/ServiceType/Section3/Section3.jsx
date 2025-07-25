import React, { useState } from "react";
import "./Section3.css";

export default function Section3({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleStatus = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="service-type-section-3 section">
      <div className="container flex-column-center g-20">
        <h4>{data.title}</h4>
        <p className="main-p">{data.description}</p>
        <div className="value-box flex-between-center g-20">
          {data.valueBoxData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleStatus(index)}
                className={`value-item flex-center g-20 ${
                  activeIndex === index ? "active" : ""
                }`}>
                <img src={item.imgSrc} alt={item.altText} />
                <div className="value-item-content flex-column g-15">
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
