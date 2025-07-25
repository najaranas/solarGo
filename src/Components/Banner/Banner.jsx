import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="content flex-column g-15">
          <h3>
            Installez du Photovoltaïque,
            <br /> Récoltez les Économies!
          </h3>
          <Link to={"/contact"}>
            <button className="primary-btn flex-center g-10">
              <span>Devis Gratuit</span>
              <i className="fa-solid fa-angle-right flex-center-center"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
