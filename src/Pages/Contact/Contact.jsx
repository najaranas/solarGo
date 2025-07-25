import React from "react";
import Layout from "../../Components/Layouts/Layout";
import Section1 from "../Contact/Section1/Section1";
import Section2 from "./Section2/Section2";
import FaqSection from "../../Components/FaqSection/FaqSection";

const FaqData = [
  {
    title: "Comment puis-je vous contacter ?",
    paragraph:
      "Vous pouvez nous joindre par téléphone, email ou via le formulaire de contact.",
  },
  {
    title: "Proposez-vous des devis gratuits ?",
    paragraph:
      "Oui, nous proposons des devis gratuits et personnalisés pour chaque projet.",
  },
  {
    title: "Quels sont vos horaires d'ouverture ?",
    paragraph: "Nous sommes disponibles du lundi au samedi, de 8h à 18h.",
  },
  {
    title: "Avez-vous un service après-vente ?",
    paragraph:
      "Oui, nous assurons un suivi et un service après-vente pour tous nos clients.",
  },
];

export default function Contact() {
  return (
    <Layout>
      <div className="contact">
        <Section1 />
        <Section2 />
        <FaqSection title={"Questions fréquentes"} data={FaqData} />
      </div>
    </Layout>
  );
}
