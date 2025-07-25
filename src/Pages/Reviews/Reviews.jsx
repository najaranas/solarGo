import React from "react";
import Layout from "../../Components/Layouts/Layout";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Section1 from "./Section1/Section1";
import FaqSection from "../../Components/FaqSection/FaqSection";

const FaqData = [
  {
    title: "Pourquoi choisir Solar GO ?",
    paragraph:
      "Solar GO offre une expertise locale, des installations de qualité et un service après-vente irréprochable.",
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

export default function Reviews() {
  return (
    <Layout>
      <div className="reviews">
        <HeroBanner
          subTitle="Avis"
          mainTitle="Découvrez l'avis de nos clients satisfaits !"
        />
        <Section1 />
        <FaqSection title={"Questions à propos de nous"} data={FaqData} />
      </div>
    </Layout>
  );
}
