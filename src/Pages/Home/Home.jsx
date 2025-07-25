import React from "react";
import Layout from "../../Components/Layouts/Layout";
import HeroSection from "./HeroSection/HeroSection";
import Form from "../../Components/Form/Form";
import ServiceSection from "./ServiceSection/ServiceSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import AboutSection from "./AboutSection/AboutSection";
import FaqSection from "../../Components/FaqSection/FaqSection";
import ProcessSection from "../../Components/ProcessSection/ProcessSection";
import GalerieSection from "./GalerieSection/GalerieSection";

const FaqData = [
  {
    title:
      "Pourquoi choisir Solar GO comme votre fournisseur de panneaux solaires en Tunisie ?",
    paragraph:
      "Solar GO est le choix idéal pour vos panneaux solaires en Tunisie, offrant une expertise locale, des installations de qualité et un service après-vente irréprochable.",
  },
  {
    title:
      "Comment fonctionne l'installation de panneaux solaires avec Solar GO en Tunisie ?",
    paragraph:
      "Solar GO garantit une installation rapide et efficace de panneaux solaires, de l'évaluation initiale à la mise en service complète.",
  },
  {
    title:
      "Quels sont les avantages de l'énergie solaire en Tunisie avec Solar GO ?",
    paragraph:
      "L'énergie solaire en Tunisie offre des économies sur vos factures d'électricité et une énergie propre, grâce aux solutions proposées par Solar GO.",
  },
  {
    title:
      "Pourquoi choisir Solar GO pour la maintenance de votre système solaire en Tunisie ?",
    paragraph:
      "Solar GO assure une maintenance régulière et fiable de votre système solaire, prolongeant sa durée de vie et optimisant ses performances.",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <HeroSection />

        <Form />
        <ServiceSection />
        <ReviewsSection />
        <AboutSection />
        <GalerieSection />
        <ProcessSection />

        <FaqSection
          title="Obtenez les réponses dont vous avez besoin"
          data={FaqData}
        />
      </div>
    </Layout>
  );
}
