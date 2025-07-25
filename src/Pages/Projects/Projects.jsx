import Layout from "../../Components/Layouts/Layout";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Section1 from "./Section1/Section1";
import FaqSection from "../../Components/FaqSection/FaqSection";

const FaqData = [
  {
    title: "Pourquoi choisir Solar GO pour vos projets ?",
    paragraph:
      "Nous avons une grande expérience dans la réalisation de projets solaires de qualité.",
  },
  {
    title: "Quels types de projets réalisez-vous ?",
    paragraph:
      "Nous réalisons des installations résidentielles, industrielles et agricoles.",
  },
  {
    title: "Comment suivre l'avancement de mon projet ?",
    paragraph:
      "Nous vous tenons informé à chaque étape et restons à votre écoute.",
  },
  {
    title: "Proposez-vous un accompagnement personnalisé ?",
    paragraph: "Oui, chaque projet bénéficie d'un accompagnement sur mesure.",
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="projects">
        <HeroBanner subTitle="Projets" mainTitle="Nos réalisations solaires" />
        <Section1 />
        <FaqSection title={"Questions sur nos projets"} data={FaqData} />
      </div>
    </Layout>
  );
}
