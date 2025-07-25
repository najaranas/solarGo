import React from "react";
import { Link } from "react-router-dom";
import ProjectSection from "../../../Components/ProjectSection/ProjectSection";

export default function Section5({ data }) {
  return (
    <div className="projects section">
      <div className="container  ">
        <div className="service-type-section-5 flex-between-center">
          <h4>{data.title}</h4>
          <Link className="link flex-center g-5" to="/projets">
            <span>Voir plus de projets</span>
            <i className="fa-solid fa-caret-right"></i>
          </Link>
        </div>
        <ProjectSection data={data.projects} />
      </div>
    </div>
  );
}
