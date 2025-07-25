import React from "react";
import "./Section1.css";
import Form from "../../../Components/Form/Form";

export default function Section1({ data }) {
  return (
    <section className="contact-section-1 first-section">
      <div className="container flex g-50">
        <div className="content flex-column g-30">
          <h1>Des solutions de qualité à portée de clic</h1>
          <p>
            Contactez-nous pour planifier votre inspection gratuite ! Nous nous
            engageons à gérer votre remplacement ou réparation de toiture avec
            diligence et professionnalisme. Nous sommes experts pour vous tenir
            informé, assurer le bon déroulement de votre projet et garder votre
            maison au sec.
          </p>
          <div className="actions flex-column g-15">
            <div className="box flex-center g-10">
              <i className="fa-solid fa-phone flex-center-center"></i>
              <a href="tel:+2174606611" className="phn-number line-hover">
                (+216) 55 809 651
              </a>
            </div>
            <div className="box flex-center g-10">
              <i className="fa-solid fa-envelope flex-center-center"></i>
              <a href="mailto:Commercial@gecpv.tn" className="email line-hover">
                Commercial@gecpv.tn
              </a>
            </div>
            <div className="box flex-center g-10">
              <i className="fa-solid fa-location-dot flex-center-center"></i>
              <span className="location">
                Route de Gremda KM 6, Tunisie 3012, Tunisie
              </span>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
