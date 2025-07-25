import React from "react";

export default function HeroSection() {
  return (
    <section className={"hero-section first-section"}>
      <div className="container flex-between-center g-20">
        <div className="content flex-column-start g-20 ">
          <span>À-Propos</span>
          <h3>De Optiwatt</h3>
          <p>
            Founded on family-centric principles, the Solar GO team values your
            home as much as their own. From high-quality craftsmanship to
            first-rate communication, learn more about why Bio Solar Energy
            operates with you, the homeowner, as the focus.
          </p>
        </div>
        <img alt="" decoding="async" src={"/assets/test.png"} />
      </div>
    </section>
  );
}
