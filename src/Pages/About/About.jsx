import React from "react";
import Layout from "../../Components/Layouts/Layout";
import Section1 from "./Section1/Section1";
import Section3 from "./Section3/Section3";
import FaqSection from "../../Components/FaqSection/FaqSection";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Section2 from "./Section2/Section2";
import Section4 from "./Section4/Section4";

const FaqData = [
  {
    title: "Pourquoi choisir Solar GO ?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
  },
  {
    title: "Quels sont les avantages de l'énergie solaire ?",
    paragraph:
      "L'énergie solaire permet de réaliser des économies et de contribuer à la protection de l'environnement.",
  },
  {
    title: "Comment fonctionne l'installation ?",
    paragraph:
      "Nous assurons une installation rapide et efficace, adaptée à vos besoins.",
  },
  {
    title: "Y a-t-il un service après-vente ?",
    paragraph:
      "Oui, nous proposons un suivi régulier et un service après-vente de qualité.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="about">
        <HeroBanner subTitle="À-Propos" mainTitle="À propos de Solar GO" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <FaqSection title={"Questions à propos de nous"} data={FaqData} />
      </div>
    </Layout>
  );
}
