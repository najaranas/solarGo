import React from "react";
import "./Section4.css";
import { Link } from "react-router-dom";

export default function Section4() {
  return (
    <section className="services-section-4 section">
      <div className="container flex-center g-50">
        <img
          src="/assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash (1).jpg"
          alt=""
          loading="async"
        />
        <div className="content flex-column-start g-20">
          <h4>The Heart of Solar GO</h4>
          <p>
            Family is at the heart of why Gilsomar Matos decided to start Euro
            Solar. After working for 3 years with another company, he decided to
            set out on his own and create a company that truly reflects his
            values. He and his wife recently introduced their first baby to the
            family, and he looks forward to creating a business that his family
            can be proud of – a legacy to pass on.
          </p>
          <Link to={"/contact"} className="primary-btn flex-center g-10">
            <span>Devis Gratuit</span>
            <i className="fa-solid fa-caret-right " />
          </Link>
        </div>
      </div>
    </section>
  );
}
