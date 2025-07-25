import React, { useEffect, useRef, useState } from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";

export default function MobileMenu({ navStatus, setNavStatus }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const servicesdropdownRef = useRef(null);
  const resourcesropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const resourcesRef = useRef(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex === 1) {
      servicesdropdownRef.current.style.height = `${
        servicesRef.current.scrollHeight + 38 + 20
      }px`;
    } else {
      servicesdropdownRef.current.style.height = "38px";
    }

    if (activeIndex === 2) {
      resourcesropdownRef.current.style.height = `${
        resourcesRef.current.scrollHeight + 38 + 20
      }px`;
    } else {
      resourcesropdownRef.current.style.height = "38px";
    }
  }, [activeIndex]);

  return (
    <div className={`mobile-nav ${navStatus}`}>
      <div className="wrapper flex-column g-30">
        <div className="top-nav flex-between-center g-10">
          <Link className="logo flex-center-center g-10" to={"/"}>
            <img
              onClick={() => setNavStatus("")}
              width={100}
              src="/assets/Solar GO.png"
              alt="Logo"
            />
          </Link>
          <i className="fa-solid fa-xmark" onClick={() => setNavStatus("")}></i>
        </div>

        <div className="nav-box flex-column-start g-20">
          <Link className="link" to={"/"} onClick={() => setNavStatus("")}>
            Accueil
          </Link>
          <Link
            className="link"
            to={"/apropos"}
            onClick={() => setNavStatus("")}>
            À-Propos
          </Link>

          {/* Services Dropdown */}
          <div
            className={`dropdown ${activeIndex === 1 ? "active" : ""}`}
            ref={servicesdropdownRef}>
            <div
              className="link dropdown-toggle"
              onClick={() => toggleDropdown(1)}>
              Services <i className="fa-solid fa-caret-down"></i>
            </div>
            <div
              className="dropdown-content flex-column-start g-20"
              ref={servicesRef}>
              <Link
                className="link"
                to={"/installation-solaire"}
                onClick={() => setNavStatus("")}>
                Installation Solaire
              </Link>
              <Link
                className="link"
                to={"/installation-pompage-solaire"}
                onClick={() => setNavStatus("")}>
                Installation Pompage Solaire
              </Link>
              <Link
                className="link"
                to={"/maintenance-et-suivi"}
                onClick={() => setNavStatus("")}>
                Maintenance Et Suivi
              </Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div
            className={`dropdown ${activeIndex === 2 ? "active" : ""}`}
            ref={resourcesropdownRef}>
            <div
              className="link dropdown-toggle"
              onClick={() => toggleDropdown(2)}>
              Resources <i className="fa-solid fa-caret-down"></i>
            </div>
            <div
              className="dropdown-content flex-column-start g-20"
              ref={resourcesRef}>
              <Link
                className="link"
                to={"/projets"}
                onClick={() => setNavStatus("")}>
                Projets
              </Link>
              <Link
                className="link"
                to={"/avis"}
                onClick={() => setNavStatus("")}>
                Avis
              </Link>
              <Link
                className="link"
                to={"/faq"}
                onClick={() => setNavStatus("")}>
                FAQ's
              </Link>
            </div>
          </div>

          <Link
            className="link"
            to={"/contact"}
            onClick={() => setNavStatus("")}>
            Contact
          </Link>
        </div>
        <div className="nav-box flex g-20">
          <a
            href="https://www.facebook.com/gecphotovoltaique"
            className="line-hover flex-center-center g-10">
            <i className="fa-brands fa-facebook-f "></i>
          </a>
          <a
            href="https://www.facebook.com/gecphotovoltaique"
            className="line-hover flex-center-center g-10">
            <i className="fa-brands fa-instagram "></i>
          </a>
          <a
            href="https://www.linkedin.com/company/gecphotovoltaique"
            className="line-hover flex-center-center g-10">
            <i className="fa-brands fa-linkedin-in "></i>
          </a>
        </div>
      </div>
    </div>
  );
}
