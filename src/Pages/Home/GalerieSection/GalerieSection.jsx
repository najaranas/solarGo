import React from "react";
import { Link } from "react-router-dom";
import ProjectSection from "../../../Components/ProjectSection/ProjectSection";
import "./GalerieSection.css";
const AllprojectsData = [
  {
    imgSrc:
      "https://prosolaire.fr/wp-content/uploads/2017/11/WhatsApp-Image-2021-11-06-at-12.35.58-AM-e1636294102444.jpeg",
    imgAlt: "Roof Replacement",
    id: 3,
  },
  {
    imgSrc:
      "https://tse2.mm.bing.net/th/id/OIP.4bLLADTk98g1S2yWi0j9lgHaF7?r=0&w=1500&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3",
    imgAlt: "Multi-Family",
    id: 1,
  },
  {
    imgSrc:
      "https://tse3.mm.bing.net/th/id/OIP.ANRl2utS-reoOaN-OGK3KwHaFj?r=0&w=2001&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",
    imgAlt: "Residential",
    id: 2,
  },
  {
    imgSrc:
      "https://tse3.mm.bing.net/th/id/OIP.E6xqRUejXSUIMjJneeuo0gHaJV?r=0&w=1256&h=1582&rs=1&pid=ImgDetMain&o=7&rm=3",
    imgAlt: "Roof Replacement",
    id: 3,
  },
];

export default function GalerieSection() {
  return (
    <section className="projects-section">
      <div className="projects-title container flex-between-center g-30">
        <h3>Nos Projets</h3>

        <Link className="link flex-center g-5" to="/projets">
          <span>Afficher Tout Les Projets</span>
          <i className="fa-solid fa-caret-right "></i>
        </Link>
      </div>
      <ProjectSection data={AllprojectsData} />
    </section>
  );
}
