import React from "react";
import "./Section2.css";

export default function Section2() {
  return (
    <section className="about-section-2 section">
      <div className="container flex-center g-50">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
          alt="Équipe installant des panneaux solaires sur un toit"
          loading="async"
        />
        <div className="content flex-column-start g-20">
          <h4>Notre équipe, notre force</h4>
          <p>
            Chez Solar GO, notre équipe est notre plus grande force. Chaque
            membre partage la même passion pour l'énergie solaire et
            l'engagement envers la satisfaction client. Ensemble, nous
            travaillons pour offrir des solutions innovantes et un service
            irréprochable à chaque projet.
          </p>
        </div>
      </div>
    </section>
  );
}
