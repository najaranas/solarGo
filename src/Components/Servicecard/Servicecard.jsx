import React from "react";
import "./Servicecard.css";
import { useNavigate } from "react-router-dom";

export default function Servicecard({ data }) {
  const navigate = useNavigate();
  // Determine the correct path based on the service name
  let path = "/services";
  if (data.serviceCardName === "Installation Photovoltaïque") {
    path = "/installation-solaire";
  } else if (data.serviceCardName === "Installation Pompage Solaire") {
    path = "/installation-pompage-solaire";
  }
  return (
    <div
      className="service-card-item clickable"
      onClick={() => navigate(path)}
      style={{ cursor: "pointer" }}>
      <div className="img-bg">
        <img src={data.imgSrc} alt={data.imgAlt} />
      </div>
      <div className="content flex-column g-10">
        <h4>{data.serviceCardName}</h4>
        <div className=" text-content flex-column-start g-10">
          <p>{data.serviceCardDescription}</p>
          <a
            className="link flex-center g-5"
            href={path}
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <span>En savoir plus</span>
            <i className="fa-solid fa-caret-right "></i>
          </a>
        </div>
      </div>
    </div>
  );
}
