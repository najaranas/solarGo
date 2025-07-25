import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content flex-column-center g-50">
          <div className="footer-logo">
            <Link className="logo flex-center g-20" to={"/"}>
              <img
                width={150}
                src="/assets/Solar GO.png"
                alt=""
                title="Panneaux solaires en Tunisie offrant une énergie propre et durable"
              />

              {/* <div className="text">
                <h2>Solar GO</h2>
              </div> */}
            </Link>
          </div>
          <div className="footer-nav flex-between-start g-100">
            <div className="nav-box  g-20">
              <h4>Liens Utiles</h4>
              <div className="links flex-start g-30">
                <Link className="link line-hover" to={"/"}>
                  Accueil
                </Link>
                <Link className="link line-hover" to={"/apropos"}>
                  À-Propos
                </Link>
                <div className="flex-column-start g-20">
                  <Link className="link line-hover" to={"/services"}>
                    Services
                  </Link>
                  <div className="sub-links flex-column-start g-10">
                    <Link
                      className="link line-hover"
                      to={"/installation-solaire"}>
                      Installation Solaire
                    </Link>
                    <Link
                      className="link line-hover"
                      to={"/installation-pompage-solaire"}>
                      Installation Pompage Solaire
                    </Link>
                    <Link
                      className="link line-hover"
                      to={"/maintenance-et-suivi"}>
                      Maintenance Et Suivi
                    </Link>
                  </div>
                </div>
                <div className="flex-column-start g-20">
                  <div className="">Resources</div>
                  <div className="sub-links flex-column-start g-10">
                    <Link className="link line-hover" to={"/projets"}>
                      Projets
                    </Link>
                    <Link className="link line-hover" to={"/avis"}>
                      Avis
                    </Link>
                    <Link className="link line-hover" to={"/faq"}>
                      FAQ's
                    </Link>
                  </div>
                </div>
                <Link className="link line-hover" to={"/contact"}>
                  Contact
                </Link>
              </div>
            </div>

            <div className="nav-box flex-column g-20">
              <h4>Suivez Nous</h4>

              <a
                href="https://www.facebook.com/gecphotovoltaique"
                className="line-hover flex-center-center g-10">
                <i className="fa-brands fa-facebook-f "></i>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.facebook.com/gecphotovoltaique"
                className="line-hover flex-center-center g-10">
                <i className="fa-brands fa-instagram "></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/gecphotovoltaique"
                className="line-hover flex-center-center g-10">
                <i className="fa-brands fa-linkedin-in "></i>
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-actions flex-center g-15">
          <div className="box flex-center g-10">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+2174606611" className="phn-number line-hover">
              (+216) 20 799 566
            </a>
          </div>
          <div className="box flex-center g-10">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:Commercial@gecpv.tn" className="email line-hover">
              solargo.company@Gmail.com
            </a>
          </div>
          <div className="box flex-center g-10">
            <i className="fa-solid fa-location-dot"></i>
            <span className="location">carthage, Tunis, Tunisia</span>
          </div>
        </div>
        <div className="footer-terms flex-center">
          <span className="rights">
            &copy;
            {new Date().getFullYear()}
            <b>Solar GO</b>Tous droits réservés
          </span>

          <span className="powred-by">
            Conception du site et référencement par
            <b className="line-hover">
              <a
                className="hover-text"
                href="https://www.linkedin.com/in/anasnajar">
                Anas&nbsp;Najar
              </a>
            </b>
          </span>
        </div>
      </div>
    </footer>
  );
}
