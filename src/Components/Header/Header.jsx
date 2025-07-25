import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ setNavStatus }) {
  return (
    <header>
      <div className={"container flex-between-center "}>
        <Link className="logo flex-center-center g-10" to={"/"}>
          <img
            width={100}
            src="/assets/Solar GO.png"
            alt=""
            title="Panneaux solaires en Tunisie offrant une énergie propre et durable"
          />

          {/* <div className="text">
            <h2>
              Best <br /> Solar
            </h2>
          </div> */}
        </Link>
        <nav className="nav-list flex-center g-30">
          <Link className="list-item line-hover" to={"/"}>
            Acceuil
          </Link>
          <Link className="list-item line-hover" to={"/apropos"}>
            À-Propos
          </Link>
          <div className="list-item line-hover ">
            <Link to={"/services"} className="flex-center g-5">
              <span>Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </Link>

            <div className="sub-list flex-column-start ">
              <Link
                className="list-item line-hover"
                to={"/installation-solaire"}>
                Installation Solaire
              </Link>
              <Link
                className="list-item line-hover"
                to={"/installation-pompage-solaire"}>
                Installation Pompage Solaire
              </Link>
              <Link
                className="list-item line-hover"
                to={"/maintenance-et-suivi"}>
                Maintenance Et Suivi
              </Link>
            </div>
          </div>
          <div className="list-item ">
            <div className="flex-center g-5">
              <span>Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </div>

            <div className="sub-list flex-column-start ">
              <Link className="list-item line-hover" to={"/projets"}>
                Projets
              </Link>
              <Link className="list-item line-hover" to={"/avis"}>
                Avis
              </Link>

              <Link className="list-item line-hover" to={"/faq"}>
                Faq's
              </Link>
            </div>
          </div>

          <Link className="list-item line-hover" to={"/contact"}>
            Contact
          </Link>
        </nav>

        <div className="action  flex-center-center g-20">
          <a
            href="tel:+2174606611"
            className="secondary-btn flex-center-center g-10">
            <i className="fa-solid fa-phone-volume " />
            <span>(+216) 20 799 566</span>
          </a>
          <Link to={"/contact"} className="primary-btn flex-center g-10">
            <span>Devis Gratuit</span>
            <i className="fa-solid fa-caret-right " />
          </Link>
        </div>
        <i
          className="fa-solid fa-bars"
          onClick={() => {
            setNavStatus("active");
          }}></i>
      </div>
    </header>
  );
}
