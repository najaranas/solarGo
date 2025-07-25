import React, { useState } from "react";
import "./FaqSection.css";
import FaqCard from "../FaqCard/FaqCard";
import { Link } from "react-router-dom";

export default function FaqSection({ title, data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="faq-section section">
      <div className="container flex-center g-50">
        {title ? (
          <div className="faq-title flex-column-start g20">
            <h3>{title}</h3>
            <Link className="link flex-center g-5" to="/faq">
              <span>Afficher Tout Les Questions</span>
              <i className="fa-solid fa-caret-right "></i>
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="faq-box flex-column g-20">
          {data.map((item, index) => {
            return (
              <FaqCard
                data={item}
                key={index}
                index={index}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
