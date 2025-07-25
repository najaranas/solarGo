import React, { useEffect, useMemo, useState } from "react";
import "./Section1.css";
import ProjectSection from "../../../Components/ProjectSection/ProjectSection";
import { useLocation, useNavigate } from "react-router-dom";

const filterTypeData = [
  { name: "Tout afficher", id: 0 },
  { name: "Installation Photovoltaïque", id: 1 },
  { name: "Pompage Solaire", id: 2 },
  { name: "Maintenance & Suivi", id: 3 },
];

const AllprojectsData = [
  {
    imgSrc:
      "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgAlt: "Installation Photovoltaïque",
    id: 1,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/14209079/pexels-photo-14209079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgAlt: "Installation Pompage Solaire",
    id: 2,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Maintenance et Suivi",
    id: 3,
  },
];

export default function Section1() {
  const [activeFilter, setActiveFilter] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  let filtredData = useMemo(() => {
    if (activeFilter === 0) {
      return AllprojectsData;
    }
    return AllprojectsData.filter((item) => item.id === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (id) => {
    if (id === activeFilter) return;

    setActiveFilter(id);

    const object = filterTypeData.find((value) => value.id === id);
    if (object.id !== 0) {
      const urlParam = object.name.toLowerCase();
      navigate(`/projects/?projets_filters=${urlParam}`);
    } else {
      navigate("/projets");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const filter = query.get("projets_filters");

    if (filter) {
      const formattedFilter = filter.toLowerCase().replace(/-/g, "-");
      const object = filterTypeData.find(
        (value) => value.name === formattedFilter
      );

      if (object) {
        handleFilterChange(object.id);
      } else {
        setActiveFilter(null);
      }
    } else {
      setActiveFilter(0);
    }
  }, [location]);

  return (
    <section className="projets-section-1">
      <div className="container">
        <h4>Filtrer par projet :</h4>
        <div className="filter-type flex-center g-20">
          {filterTypeData.map((item) => (
            <div
              key={item.id}
              className={`filter-type-item ${
                activeFilter === item.id ? "active" : ""
              }`}
              onClick={() => handleFilterChange(item.id)}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <ProjectSection data={filtredData} />
    </section>
  );
}
