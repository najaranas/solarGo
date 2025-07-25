import React, { useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import FaqSection from "../../Components/FaqSection/FaqSection";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";

const FaqData = [
  {
    title: "Pourquoi devriez-vous choisir de travailler avec Solar GO?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de solaires nécessitent très peu de solaires nécessitent très peu de solaires nécessitent très peu de  maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
  },
  {
    title: "Pourquoi devriez-vous choisir de travailler avec Solar GO?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
  },
  {
    title: "Pourquoi devriez-vous choisir de travailler avec Solar GO?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
  },
  {
    title: "Pourquoi devriez-vous choisir de travailler avec Solar GO?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Layout>
      <div className="services">
        <HeroBanner subTitle="Services" mainTitle="Nos services utiles" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <FaqSection title={"Questions à propos de nous"} data={FaqData} />
      </div>
    </Layout>
  );
}
