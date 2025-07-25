import React from "react";
import "./Section2.css";
import { Link } from "react-router-dom";

export default function Section2() {
  return (
    <section className="services-section-2">
      <div className="container flex-center g-50">
        <div className="content flex-column-start g-20">
          <h3>We’ve Got You Covered</h3>
          <p>
            Coming home at the end of a long work day should be something to
            look forward to. The last thing you need to worry about is the rain
            following you from outside to inside your home. Not only do our
            quality materials stand up to Washington weather, they also come
            with a GAF certified 50 year manufacturer warranty and a 10 year
            labor warranty. So go ahead and put your feet up, we’ve got you
            covered!
          </p>
          <Link to={"/contact"} className="primary-btn flex-center g-10">
            <span>Devis Gratuit</span>
            <i className="fa-solid fa-caret-right " />
          </Link>
        </div>
        <div className="main-img">
          <img
            src="/assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash (1).jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
