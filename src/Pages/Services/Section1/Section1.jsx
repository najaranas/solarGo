import React from "react";
import "./Section1.css";
import Servicecard from "../../../Components/Servicecard/Servicecard";

const data = [
  {
    serviceCardName: "azezeaz",
    serviceCardDescription:
      "When it’s time for a new roof, we’ll install a quality product that stands up to Washington weather.",
    imgSrc: "/assets/premium_photo-1663126982201-447c86bdca87.avif",
    imgAlt: "",
  },
  {
    serviceCardName: "azezeaz",
    serviceCardDescription:
      "When it’s time for a new roof, we’ll install a quality product that stands up to Washington weather.",
    imgSrc: "/assets/premium_photo-1663126982201-447c86bdca87.avif",
    imgAlt: "",
  },
  {
    serviceCardName: "azezeaz",
    serviceCardDescription:
      "When it’s time for a new roof, we’ll install a quality product that stands up to Washington weather.",
    imgSrc: "/assets/premium_photo-1663126982201-447c86bdca87.avif",
    imgAlt: "",
  },
];

export default function Section1() {
  return (
    <section className="services-section-1">
      <div className="container">
        {data.map((item, index) => {
          return <Servicecard key={index} data={item} />;
        })}
      </div>
    </section>
  );
}
