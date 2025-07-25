import React, { useState } from "react";
import "./Section3.css";
const data = [
  {
    imgSrc:
      "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hat.svg",
    altText: "Sécurité",
    title: "Sécurité",
    description:
      "Respect des normes de sécurité les plus strictes pour tous nos employés.",
  },
  {
    imgSrc:
      "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-check.svg",
    altText: "Qualité",
    title: "Qualité",
    description:
      "Matériaux certifiés et travail soigné, sans compromis sur la qualité.",
  },
  {
    imgSrc:
      "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-chat.svg",
    altText: "Accompagnement",
    title: "Accompagnement",
    description:
      "Un suivi personnalisé et une écoute à chaque étape de votre projet.",
  },
  {
    imgSrc:
      "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-eye.svg",
    altText: "Transparence",
    title: "Transparence",
    description:
      "Honnêteté et transparence avec tous nos clients et collaborateurs.",
  },
  {
    imgSrc:
      "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hi5.svg",
    altText: "Confiance",
    title: "Confiance",
    description:
      "Des relations durables basées sur la confiance et le respect.",
  },
];

export default function Section3() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleStatus = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="about-section-3 section">
      <div className="container flex-column-center g-20">
        <h4>Nos valeurs fondamentales</h4>
        <p className="main-p">
          Chaque projet chez Solar GO est guidé par nos valeurs fondamentales.
          Nous nous engageons à vous accompagner à chaque étape, de votre
          premier appel jusqu'au nettoyage final. Grâce à notre service
          personnalisé, vous bénéficiez d'un interlocuteur unique du début à la
          fin.
        </p>
        <div className="value-box flex-between-center g-20">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleStatus(index)}
                className={`value-item flex-center g-20 ${
                  activeIndex === index ? "active" : ""
                }`}>
                <img src={item.imgSrc} alt={item.altText} />
                <div className="value-item-content flex-column g-15">
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
