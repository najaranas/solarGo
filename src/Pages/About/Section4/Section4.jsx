import React from "react";
import { Link } from "react-router-dom";
import ProjectSection from "../../../Components/ProjectSection/ProjectSection";

const projectsData = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Installation de panneaux solaires sur un toit résidentiel",
    id: 0,
  },
  { imgSrc: "/assets/logo.png", imgAlt: "", id: 2 },
  { imgSrc: "/assets/logo.png", imgAlt: "", id: 1 },
  { imgSrc: "/assets/logo.png", imgAlt: "", id: 1 },
];

export default function Section4() {
  return (
    <div className="projects section">
      <div className="container  ">
        <div className="about-section-4-top flex-between-center">
          <h4>Nos réalisations récentes</h4>
          <Link className="link flex-center g-5" to="/projets">
            <span>Voir plus de projets</span>
            <i className="fa-solid fa-caret-right"></i>
          </Link>
        </div>
        <ProjectSection data={projectsData} />
      </div>
    </div>
  );
}
