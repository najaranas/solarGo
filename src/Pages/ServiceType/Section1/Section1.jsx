import React from "react";
import "./Section1.css";
import Form from "../../../Components/Form/Form";

export default function Section1({ data }) {
  return (
    <section className="service-type-section-1 first-section">
      <div className="container flex g-50 ">
        <div className="content flex-column g-20">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <p>{data.description}</p>

          {/* features data */}

          <ul className="features-list flex-column g-20">
            {data.features.map((item, index) => {
              return (
                <li key={index} className="features-item flex-center g-10">
                  <img width={20} src={item.icon} alt="" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>

          {/* social data */}

          <ul className="social-list flex-center g-20">
            {data.social.map((item, index) => {
              return (
                <li key={index} className="social-item flex-center g-10">
                  <img width={20} src={item.icon} alt="" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <Form />
      </div>
    </section>
  );
}
