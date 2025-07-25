import React, { useState } from "react";
import "./Section3.css";
const data = [
  {
    title: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      imgSrc:
        "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/proc-steps-01.svg",
      imgAlt: "",
      imgWidth: 100,
    },
    content: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      description:
        "Nous effectuerons une inspection gratuite dès le lendemain de votre appel. Nous vous présenterons nos conclusions et vous proposerons plusieurs options.",
    },
  },
  {
    title: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      imgSrc:
        "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/proc-steps-01.svg",
      imgAlt: "",
      imgWidth: 100,
    },
    content: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      description:
        "Nous effectuerons une inspection gratuite dès le lendemain de votre appel. Nous vous présenterons nos conclusions et vous proposerons plusieurs options.",
    },
  },
  {
    title: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      imgSrc:
        "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/proc-steps-01.svg",
      imgAlt: "",
      imgWidth: 100,
    },
    content: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      description:
        "Nous effectuerons une inspection gratuite dès le lendemain de votre appel. Nous vous présenterons nos conclusions et vous proposerons plusieurs options.",
    },
  },
  {
    title: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      imgSrc:
        "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/proc-steps-01.svg",
      imgAlt: "",
      imgWidth: 100,
    },
    content: {
      step: "Étape Un",
      heading: "Dites Bonjour !",
      description:
        "Nous effectuerons une inspection gratuite dès le lendemain de votre appel. Nous vous présenterons nos conclusions et vous proposerons plusieurs options.",
    },
  },
];

export default function Section3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handekActiveBox = (index) => {
    setActiveIndex(index);
  };
  console.log("aze");
  return (
    <section className="services-section-3">
      <div className="container flex-column-center g-10">
        <h5>Notre Processus</h5>
        <h4 className="main-title">
          En savoir plus sur notre processus de traitement de confiance
        </h4>
        <div className="service-process-box flex-center g-30">
          {data.map((item, index) => {
            return (
              <div
                className={
                  "service-process-item flex-center g-20 " +
                  (index === activeIndex ? "active" : "")
                }
                key={index}
                onClick={() => {
                  handekActiveBox(index);
                }}>
                <div className="title flex-column g-10">
                  <span>{item.title.step}</span>
                  <h5>{item.title.heading}</h5>
                  <img
                    src={item.title.imgSrc}
                    alt={item.title.imgAlt}
                    width={60}
                  />
                </div>
                <div className="content flex-column g-10">
                  <span>{item.content.step}</span>
                  <h5>{item.content.heading}</h5>
                  <p>{item.content.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
