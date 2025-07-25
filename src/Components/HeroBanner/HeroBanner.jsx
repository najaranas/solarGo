import React from "react";
import "./HeroBanner.css";

export default function HeroBanner({ subTitle, mainTitle }) {
  return (
    <section className={"hero-banner first-section"}>
      <div className="container">
        <div className="content flex-column-start g-10 ">
          <span className="sub-title">{subTitle}</span>
          <h3>{mainTitle}</h3>
        </div>
      </div>
    </section>
  );
}
