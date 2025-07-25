import React, { useEffect, useState, useMemo } from "react";
import "./Section1.css";
import FaqCard from "../../../Components/FaqCard/FaqCard";
import { useLocation, useNavigate } from "react-router-dom";
import FaqSection from "../../../Components/FaqSection/FaqSection";

const filterTypeData = [
  { name: "Tout afficher", slug: "tout-afficher", id: 0 },
  { name: "Général", slug: "general", id: 1 },
  { name: "Installation", slug: "installation", id: 2 },
  { name: "Financement", slug: "financement", id: 3 },
  { name: "Maintenance", slug: "maintenance", id: 4 },
];

const AllFaqsData = [
  {
    title: "Why should I choose to work with Solar GO?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
    id: 1,
  },
  {
    title: "What is covered under an insurance claim?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
    id: 2,
  },
  {
    title: "What financing options are available?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
    id: 3,
  },
  {
    title: "What materials are used in?",
    paragraph:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
    id: 4,
  },
];

export default function Section1() {
  const [activeFilter, setActiveFilter] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize the filtered data based on the active filter
  const filteredData = useMemo(() => {
    if (activeFilter === 0) {
      return AllFaqsData;
    }
    return AllFaqsData.filter((item) => item.id === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (id) => {
    if (id === activeFilter) return;

    setActiveFilter(id);

    const object = filterTypeData.find((value) => value.id === id);
    if (object.id !== 0) {
      navigate(`/faq/?faq_filters=${object.slug}`);
    } else {
      navigate("/faq");
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const filter = query.get("faq_filters");

    if (filter) {
      const object = filterTypeData.find((value) => value.slug === filter);

      if (object) {
        setActiveFilter(object.id);
      } else {
        setActiveFilter(null);
      }
    } else {
      setActiveFilter(0);
    }
  }, [location]);

  return (
    <section className="faq-section-1">
      <div className="container">
        <h4>Filter by Faq:</h4>
        <div className="filter-type flex-center g-20">
          {filterTypeData.map((item) => (
            <div
              key={item.id}
              className={`filter-type-item ${
                activeFilter === item.id ? "active" : ""
              }`}
              onClick={() => handleFilterChange(item.id)}>
              <span>{item.name.replace(/-/g, " ")}</span>
            </div>
          ))}
        </div>
        <FaqSection data={filteredData} />
      </div>
    </section>
  );
}
