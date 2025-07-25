import React, { useState } from "react";
import "./ProjectSection.css";

export default function ProjectSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  React.useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const handleProjectClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="projects-box flex-center g-30">
        {data.map((item, index) => (
          <div
            key={index}
            className={`project main-project ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleProjectClick(index)}>
            <div className="flex-center-center">
              <img className="box-img" src={item.imgSrc} alt={item.imgAlt} />
              <i className="fa-solid fa-plus flex-center-center"></i>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <>
          <div className="img-bg">
            <img
              src={data[activeIndex].imgSrc}
              alt={data[activeIndex].imgAlt}
            />
            <i
              className="fa-solid fa-x flex-center-center"
              onClick={() => setActiveIndex(null)}></i>
          </div>
          <div className="overlay" onClick={() => setActiveIndex(null)}></div>
        </>
      )}
    </div>
  );
}
