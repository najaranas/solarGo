import React from "react";
import "./AboutSection.css";
import { Link } from "react-router-dom";

const partnersData = [
  {
    imgSrc:
      "https://www.solar-power-company.com/wp-content/uploads/2023/04/steg-removebg-preview.png",
    imgAlt: "",
  },

  {
    imgSrc: "/assets/ANME.png",
    imgAlt: "",
  },
  // { imgSrc: "/assets/logo.png", imgAlt: "" },
  // { imgSrc: "/assets/logo.png", imgAlt: "" },
];
export default function AboutSection() {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="wrapper flex-center g-30">
          <div className="left flex-column-center">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={500}
              className="main-img"
              alt=""
            />
            <div className="partners flex-center g-20">
              {partnersData.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={80}
                    height={80}
                  />
                );
              })}
            </div>
          </div>

          <div className="content flex-column-start g-15">
            <h3>Votre Satisfaction est Notre Priorité</h3>
            <p>
              « Chaque projet chez Solar GO est guidé par nos valeurs
              fondamentales. Nous nous engageons à vous accompagner à chaque
              étape, de votre premier appel jusqu'à l'installation finale. Grâce
              à notre service personnalisé, vous aurez un interlocuteur unique
              du début à la fin. »
            </p>
            <Link className="link flex-center g-5" to={"/apropos"}>
              <span>À propos de Solar GO</span>
              <i className="fa-solid fa-caret-right "></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
