import React, { useEffect, useRef } from "react";
import "./FaqCard.css";

export default function FaqCard({ data, index, activeIndex, setActiveIndex }) {
  const mainTextRef = useRef(null);
  const paragraphRef = useRef(null);

  const isActive = activeIndex === index;

  const handleEvent = () => {
    setActiveIndex(isActive ? null : index);
  };

  useEffect(() => {
    mainTextRef.current.style = `height:${
      isActive ? paragraphRef.current.offsetHeight : 0
    }px`;
  }, [isActive]);

  return (
    <div
      className={`faq-card-item ` + (isActive ? "active" : "")}
      onClick={handleEvent}>
      <div className="top-text flex-between-center g-15">
        <h5>{data.title}</h5>
        <div className="plus-icon"></div>
      </div>
      <div className="main-text" ref={mainTextRef}>
        <p ref={paragraphRef}>{data.paragraph}</p>
      </div>
    </div>
  );
}
